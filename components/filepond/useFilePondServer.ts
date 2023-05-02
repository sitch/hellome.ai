import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  type RefObject,
} from "react"
import { useS3Upload } from "next-s3-upload"

import { type FilePond, type FilePondProps } from "react-filepond"
import {
  FileStatus,
  type FilePondCallbackProps,
  type FilePondFile,
} from "filepond"

import {
  bypass,
  production,
  type ServerBuildContext,
  type UploadS3ProcessResp,
} from "@/components/filepond/filepond.server"

type FilePondServerProps = Pick<FilePondProps, "files" | "server"> & {
  callbacks: FilePondCallbackProps
}

export type UseFilePondServerOptions = {
  ref: RefObject<FilePond>
  onBlur?: () => void
  onChange?: (values: FilePondFile[]) => void
  value?: FilePondFile[]
}

export const useFilePondServer = ({
  value = [],
  ref,
  onBlur,
  onChange,
}: UseFilePondServerOptions): FilePondServerProps => {
  const nextS3Upload = useS3Upload()

  const [files, setFiles] = useState<FilePondFile[]>(value)
  const [metas, setMetas] = useState<UploadS3ProcessResp[]>([])

  useEffect(() => {
    //   export enum Status {
    //     EMPTY = 0,
    //     IDLE = 1,
    //     ERROR = 2,
    //     BUSY = 3,
    //     READY = 4
    // }

    //   export enum FileStatus {
    //     INIT = 1,
    //     IDLE = 2,
    //     PROCESSING_QUEUED = 9,
    //     PROCESSING = 3,
    //     PROCESSING_COMPLETE = 5,
    //     PROCESSING_ERROR = 6,
    //     PROCESSING_REVERT_ERROR = 10,
    //     LOADING = 7,
    //     LOAD_ERROR = 8
    // }

    // if(!files.some(file => {

    //   return ![
    //     FileStatus.PROCESSING_COMPLETE,
    //     FileStatus.PROCESSING_ERROR,
    //     FileStatus.LOAD_ERROR,
    //     FileStatus.PROCESSING_REVERT_ERROR,

    //   ].includes(file.status)

    // })) {
    //   onChange?.(files)
    // }

    const nextFiles = files.map((file) => {
      const meta = metas.find(({ key }) => key === file.serverId) ?? {
        url: undefined,
        bucket: undefined,
      }

      file.setMetadata("url", meta.url)
      file.setMetadata("bucket", meta.bucket)
      return file
    })

    console.warn("onChange", { files, metas, nextFiles })

    debugger

    onChange?.(nextFiles)
  }, [onChange, files, metas])

  const context: ServerBuildContext = {
    nextS3Upload,
    // files,
    // setFiles,
    metas,
    setMetas,
  }

  // const server =
  //   process.env.NODE_ENV === "production"
  //     ? production(context)
  //     : bypass(context)

  // const server = bypass(context)
  const server = production(context)

  return {
    server,
    files: files.map((file) => {
      return file.file
    }),

    callbacks: {
      // Logging

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
      // onprocessfile: console.info.bind(null, "onprocessfile"),
      onremovefile: console.info.bind(null, "onremovefile"),
      onpreparefile: console.info.bind(null, "onpreparefile"),
      // onupdatefiles: console.info.bind(null, 'onupdatefiles'),
      // onactivatefile: console.info.bind(null, "onactivatefile"),
      onreorderfiles: console.info.bind(null, "onreorderfiles"),

      // onpreparefile={()=> setPreparing(true)}
      // onupdatefiles={()=> setLoading(true)}
      // onaddfilestart={()=> setLoading(true)}
      // onaddfile={()=> setUploading(false)}
      // onprocessfiles={() => setLoading(false)}

      onprocessfile: (error, file) => {
        console.info("onprocessfile", error, file)

        debugger
      },
      onupdatefiles: (files) => {
        console.info("onupdatefiles", { metas, files })

        // setLoading(true)

        setFiles(files)
        // onChange?.(files)
      },

      onactivatefile: (file) => {
        const metadata = file.getMetadata()

        console.info("onactivatefile", file, metadata, metas)

        // const url = file.getFileEncodeDataURL()
        // console.info("onactivatefile", file, url, metadata)
        // debugger
      },
    },
  }
}
