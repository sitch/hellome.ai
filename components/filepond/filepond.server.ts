import { useState } from "react"
import { useS3Upload } from "next-s3-upload"

import type { FilePondProps } from "react-filepond"

export type FilepondServerBuilder = (
  context: ReturnType<typeof useS3Upload>,
) => FilePondProps["server"]

export const production: FilepondServerBuilder = ({ uploadToS3 }) => ({
  // timeout: process.env.NEXT_PUBLIC_API_IMAGE_UPLOAD_TIMEOUT ?? 10000,
  url: "/api/s3-upload",
  process: (
    fieldName,
    file,
    metadata,
    load,
    error,
    progress,
    abort,
    transfer,
    options,
  ) => {
    console.log({ fieldName, file, metadata, options })
    uploadToS3(file as File)
      .then(({ url, bucket, key }) => load(url))
      .catch(error)
    // s3Files.find(s3File => s3File.file === file)?.progress

    return {
      abort: () => {
        // This function is entered if the user has tapped the cancel button
        // See: https://github.com/ryanto/next-s3-upload/issues/146
        // controller.abort()

        // Let FilePond know the request has been cancelled
        abort()
      },
    }
  },
  // load: (source, load, error, progress, abort, headers) => {
  //   fetch(source)
  //     .then((res) => res.blob())
  //     .then(load)
  //     .catch(error)
  // },
})

export const bypass: FilepondServerBuilder = () => ({
  process: (fieldName, file, metadata, load) => {
    setTimeout(() => {
      load(`${Date.now()}`)
    }, 1500)
  },
  load: (source, load) => {
    fetch(source)
      .then((res) => res.blob())
      .then(load)
  },
})

export const useFilepondServer = (): Pick<
  FilePondProps,
  "files" | "onupdatefiles" | "server"
> => {
  const context = useS3Upload()
  const [files, setFiles] = useState<FilePondProps["files"]>([])

  const server =
    process.env.NODE_ENV === "production"
      ? production(context)
      : bypass(context)

  return {
    files,
    server,
    onupdatefiles: (files) => setFiles(files.map(({ file }) => file)),
  }
}
