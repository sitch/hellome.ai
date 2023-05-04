import { type useS3Upload } from "next-s3-upload"

import { type FilePondProps } from "react-filepond"
import { type FilePondCallbackProps } from "filepond"
import { uniq } from "lodash"

import { renameFile } from "@/components/filepond/utils"

export type UploadS3ProcessResp = Awaited<
  ReturnType<ReturnType<typeof useS3Upload>["uploadToS3"]>
>

export type ServerBuildContext = {
  nextS3Upload: ReturnType<typeof useS3Upload>
  metas: UploadS3ProcessResp[]
  setMetas: (metas: UploadS3ProcessResp[]) => void
}

export type ServerBuildFunction = (
  context: ServerBuildContext,
) => FilePondProps["server"]

//======================================================================
// Debug
//======================================================================

export const debugCallbackProps: FilePondCallbackProps = {
  oninit: console.info.bind(null, "oninit"),
  onwarning: console.warn.bind(null, "onwarning"),
  onerror: console.error.bind(null, "onerror"),
  onaddfilestart: console.info.bind(null, "onaddfilestart"),
  onaddfileprogress: console.info.bind(null, "onaddfileprogress"),
  onaddfile: console.info.bind(null, "onaddfile"),
  onprocessfilestart: console.info.bind(null, "onprocessfilestart"),
  onprocessfileprogress: console.info.bind(null, "onprocessfileprogress"),
  onprocessfileabort: console.info.bind(null, "onprocessfileabort"),
  onprocessfilerevert: console.info.bind(null, "onprocessfilerevert"),
  onprocessfile: console.info.bind(null, "onprocessfile"),
  onremovefile: console.info.bind(null, "onremovefile"),
  onpreparefile: console.info.bind(null, "onpreparefile"),
  onupdatefiles: console.info.bind(null, "onupdatefiles"),
  onactivatefile: console.info.bind(null, "onactivatefile"),
  onreorderfiles: console.info.bind(null, "onreorderfiles"),
}

export const bypass: ServerBuildFunction = () => ({
  process: (_fieldName, _file, _metadata, load) => {
    setTimeout(() => {
      load(`${Date.now()}`)
    }, 1500)
  },
  load: (source, load, error, _progress, _abort, _headers) => {
    fetch(source)
      .then((res) => res.blob())
      .then(load)
      .catch(error)
  },
})

//======================================================================
// Production (uses: `next-s3-upload`)
//======================================================================

export const production: ServerBuildFunction = ({
  nextS3Upload: { uploadToS3 },
  metas,
  setMetas,
}) => ({
  // url: "/api/uploads/",
  process: (
    _fieldName,
    file,
    metadata,
    load,
    error,
    _progress,
    abort,
    _transfer,
    _options,
  ) => {
    if (!file.name.includes(".")) {
      if (file.type === "image/png") {
        const filename = `${file.name}.png`
        console.warn("process.uploadToS3.renaming", file, filename)
        renameFile(file as File, filename)
      }
    }
    const controller = new AbortController()

    console.warn("process.uploadToS3.request", file)

    uploadToS3(file as File, {
      // TODO: submit PR
      // This function is entered if the user has tapped the cancel button
      // See: https://github.com/ryanto/next-s3-upload/issues/146
      //
      // controller,
      endpoint: {
        request: {
          url: "/api/uploads/process",
          // headers: {
          // 'Authorization': 'Basic AUTH_TOKEN_HERE'
          // },
        },
      },
    })
      // .then(load)
      .then((response) => {
        console.warn("process.uploadToS3.success", {
          file,
          metadata,
          response,
        })

        setMetas(uniq([...metas, response]))

        // return response
        const serverId = response.key
        load(serverId)

        // return serverId
      })
      // .then(load)
      .catch(error)

    return {
      abort: () => {
        // controller.abort()
        abort()
      },
    }
  },
  load: "/api/uploads/load/",
  fetch: "/api/uploads/fetch",
  restore: "/api/uploads/restore",
  revert: "/api/uploads/revert",
})
