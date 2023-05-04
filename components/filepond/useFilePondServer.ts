import { useCallback, useEffect, useState } from "react"
import { useS3Upload } from "next-s3-upload"

import { type FilePondProps } from "react-filepond"
import { type FilePondCallbackProps, type FilePondFile } from "filepond"

import {
  bypass,
  production,
  type ServerBuildContext,
  type UploadS3ProcessResp,
} from "@/components/filepond/filepond.server"
import { maybeReplaceByAndDispatch } from "@/components/filepond/utils"

type FilePondServerProps = Pick<
  FilePondProps,
  // "files" |
  "server"
> & {
  files: FilePondFile[]
  callbacks: FilePondCallbackProps
}

export type ServerMode = "bypass" | "production"

export type UseFilePondServerOptions = {
  mode: ServerMode
  // ref?: RefObject<FilePond> | undefined
  onBlur?: () => void
  onChange?: (values: FilePondFile[]) => void
  value?: FilePondFile[]
}

export const useFilePondServer = ({
  mode,
  value = [],
  // ref,
  onBlur,
  onChange,
}: UseFilePondServerOptions): FilePondServerProps => {
  const nextS3Upload = useS3Upload()

  const [files, setFiles] = useState<FilePondFile[]>(value)
  // const [pondFiles, setPondFiles] = useState<FilePondFile[]>(value)
  const [metas, setMetas] = useState<UploadS3ProcessResp[]>([])

  const handleChange = useCallback(() => {
    const nextFiles = files.map((file) => {
      const meta = metas.find(({ key }) => key === file.serverId)

      if (meta) {
        file.setMetadata("url", meta.url)
        file.setMetadata("bucket", meta.bucket)
      }
      return file
    })

    console.warn("useFilePondServer.handleChange", { files, metas, nextFiles })

    // onChange?.(nextFiles)
  }, [files, metas])

  // useEffect(handleChange, [handleChange])

  const context: ServerBuildContext = {
    nextS3Upload,
    metas,
    setMetas,
  }

  const server = mode === "bypass" ? bypass(context) : production(context)

  return {
    server,
    files,
    // files: pondFiles,
    callbacks: {
      // FilePond instance has been created and is ready.
      oninit: () => {
        console.info("oninit")
      },
      // FilePond instance throws a warning. For instance when the maximum amount of files has been reached. Optionally receives file if error is related to a file object.
      onwarning: (error, file, status) => {
        console.warn("onwarning", error, file, status)
        // if (file) {
        //   maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
        // }
      },
      // FilePond instance throws an error. Optionally receives file if error is related to a file object.
      onerror: (error, file, status) => {
        console.error("onerror", error, file, status)
        // if (file) {
        //   maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
        // }
      },
      // Created file item
      // oninitfile: (file) => {
      // console.info("oninitfile", file)
      //   maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
      // },
      // Started file load
      onaddfilestart: (file) => {
        console.info("onaddfilestart", file)
      },
      // Made progress loading a file
      onaddfileprogress: (file, progress) => {
        console.info("onaddfileprogress", file, progress)
      },
      // If no error, file has been successfully loaded
      onaddfile: (error, file) => {
        console.info("onaddfile", error, file)
      },
      // Started processing a file
      onprocessfilestart: (file) => {
        console.info("onprocessfilestart", file)
      },
      // Made progress processing a file
      onprocessfileprogress: (file, progress) => {
        console.info("onprocessfileprogress", file, progress)
      },
      // Aborted processing of a file
      onprocessfileabort: (file) => {
        console.error("onprocessfileabort", file)
        // maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
      },
      // Processing of a file has been reverted
      onprocessfilerevert: (file) => {
        console.warn("onprocessfilerevert", file)
        // maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
      },
      // If no error, Processing of a file has been completed
      onprocessfile: (error, file) => {
        console.warn("onprocessfile", error, file)
        maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
      },
      // Called when all files in the list have been processed
      onprocessfiles: () => {
        console.warn("onprocessfiles", files)
        // setFiles([...files])
        setFiles(files)
        // setPondFiles([...files])
        // onBlur?.()
      },
      // File has been removed.
      // onremovefile: (error, file) => {
      //   console.warn("onremovefile", error, file)
      //   // maybeReplaceByAndDispatch(files, file, { id: file.id }, setFiles)
      // },
      // // File has been transformed by the transform plugin or another plugin subscribing to the prepare_output filter. It receives the file item and the output data.
      // onpreparefile: (file, output) => {
      //   console.info("onpreparefile", file, output)
      // },
      // A file has been added or removed, receives a list of file items
      onupdatefiles: (files) => {
        console.warn("onupdatefiles", files)
        // setFiles([...files])
        setFiles(files)
        // setPondFiles([...files])
        // setPondFiles(files)
        // onBlur?.()
      },
      // Called when a file is clicked or tapped
      onactivatefile: (file) => {
        console.info("onactivatefile", file)
      },
      // Called when the files list has been reordered, receives current list of files (reordered) plus file origin and target index.
      onreorderfiles: (files) => {
        console.info("onreorderfiles", files)
        // setFiles(files)
      },
    },
  }
}