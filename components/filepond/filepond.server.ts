import { useState, type Dispatch, type SetStateAction } from "react"
import { useS3Upload } from "next-s3-upload"

import type { FilePondProps } from "react-filepond"
import { type FilePondCallbackProps } from "filepond"

type FilePondFiles = FilePondProps["files"]
type FilePondServer = FilePondProps["server"]

type ServerBuildContext = {
  files: FilePondFiles
  setFiles: Dispatch<SetStateAction<FilePondFiles | undefined>>
  nextS3Upload: ReturnType<typeof useS3Upload>
}

type ServerBuildFunction = (context: ServerBuildContext) => FilePondServer

type FilePondServerProps = Pick<FilePondProps, "files" | "server"> & {
  callbacks: FilePondCallbackProps
}

// cspell:disable
// `/process` response
// {
//   "token": {
//       "$metadata": {
//           "httpStatusCode": 200,
//           "requestId": "5ae878a5-994c-43d8-996a-708efda24cb5",
//           "attempts": 1,
//           "totalRetryDelay": 0
//       },
//       "Credentials": {
//           "AccessKeyId": "ASIA4VMJUOMJ2VEPYEM6",
//           "SecretAccessKey": "K1IK3g4e2y6Eb5qK5j+oyy6CtnPq8x+S6l3qVPYq",
//           "SessionToken": "IQoJb3JpZ2luX2VjEGQaCXVzLWVhc3QtMSJHMEUCIDD+hl/JvdljJw60YpWELsmeHJV/33X/y1HRQKxg4bo9AiEAxXQxAgs3WhjLz0ebM0xSNCWHCqxSGlhWhPtpc9NLKtgqqgMIbRAAGgw4NzA1NTYzOTgzNTUiDHr7FgsVNMiK/a8vwiqHA+xhgRS0YuQdzctgG+RXioXGfISa+NzDjqOsGlZVMmCPV7j8QnuqKtSgbunqFDwIswFLpjF9be5df45lwWJHv4YuF/YUW1a3Ve1xmzz3bvgTPhG7migarCzuzOrN3i8a43KHcngZ5IEcn06CEZ6vVOrRzJHHitlfiBqF1OmByOqlmiWg6Jl1LJuyyl5kUcZpriqUpEuiTqGclVtoBILYn7kwRU18wY4qALbeoJ504TxHlFtvzNvWemPog02ID9EXRJVBqimaDxtnPfZ26JVWeyqiErrW6xK3Thc/oihkuWVyij9QWt4bj6vFhbotzFiwCVehwra4qouv+czscUEG7oKLdEQMUGZ0mXL7f7pjWNNHa5/gW7/NgvKr7X/bxAB4gACCk164JE7rcHAJfGNAglud0y9eYBHFMGtCTdozxfaOFo8czyMMNwnM4FMcfrP5lB/5ORiNMHhF4kP6wYAjquBkEx23l0u+EXvUUpGixkyJuTREjKfolTVCbkxhvn1tEAmLjeTWDyYw952yogY6mQFk72NOTeS8Z8pV7Jr66LSP3OGYa0CwlKkjJK9iZvOdJvJ9EK2c6SOt+50BQLPqnTonVEiXFn6MMEhwjTq+2siTv6QjO+J/ehW0uzxa0Y77+oxwgU8DqRl9x71HELcbsYwM0KsXJ3CcZqm4V9KFqlfECGeO+6TDZtADfbH3aI1a6jE0UY+XSRISczCQZ4BF9VBtnF8iyKN0Sns=",
//           "Expiration": "2023-04-29T04:28:55.000Z"
//       },
//       "FederatedUser": {
//           "FederatedUserId": "870556398355:S3UploadWebToken",
//           "Arn": "arn:aws:sts::870556398355:federated-user/S3UploadWebToken"
//       },
//       "PackedPolicySize": 35
//   },
//   "key": "next-s3-uploads/300d4429-93cf-4374-a785-56cf2f520c4f/00003-1444181492.png",
//   "bucket": "hellome-training-photos-production",
//   "region": "us-east-1"
// }

export const production: ServerBuildFunction = ({
  nextS3Upload: { uploadToS3 },
}) => ({
  // timeout: env.NEXT_PUBLIC_API_IMAGE_UPLOAD_TIMEOUT ?? 10000,
  // url: "/api/uploads",
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

    const controller = new AbortController()

    uploadToS3(file as File, {
      // This function is entered if the user has tapped the cancel button
      // See: https://github.com/ryanto/next-s3-upload/issues/146
      //
      // controller,
      endpoint: {
        request: {
          url: "/api/uploads/process",
          // body: {},
          // headers: {},
        },
      },
    })
      .then(load)
      // .then(({ url, bucket, key }) => load(url))
      .catch(error)
    // s3Files.find(s3File => s3File.file === file)?.progress

    return {
      abort: () => {
        controller.abort()
        abort()
      },
    }
  },
  load: "/api/uploads/load/",
  fetch: "/api/uploads/fetch",
  restore: "/api/uploads/restore",
  revert: "/api/uploads/revert",
  //   load: (source, load, error, progress, abort, headers) => {

  // LoadServerConfigFunction

  //     // return {
  //     //   url:
  //     // }
  // },

  // load: (source, load, error, progress, abort, headers) => {
  //   fetch(source)
  //     .then((res) => res.blob())
  //     .then(load)
  //     .catch(error)
  // },
})

export const bypass: ServerBuildFunction = () => ({
  process: (fieldName, file, metadata, load) => {
    setTimeout(() => {
      load(`${Date.now()}`)
    }, 1500)
  },
  load: (source, load) => {
    fetch(source)
      .then((res) => res.blob())
      .then(load)
    // .then((file) => {
    // load(file)
    // })
  },
})

export const useFilePondServer = (): FilePondServerProps => {
  const nextS3Upload = useS3Upload()
  const [files, setFiles] = useState<FilePondFiles>([])

  const context: ServerBuildContext = {
    nextS3Upload,
    files,
    setFiles,
  }

  // const server =
  //   env.NODE_ENV === "production"
  //     ? production(context)
  //     : bypass(context)

  const server = production(context)

  return {
    server,
    files,
    callbacks: {
      onupdatefiles: (files) => setFiles(files.map(({ file }) => file)),

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
      onprocessfile: console.info.bind(null, "onprocessfile"),
      onremovefile: console.info.bind(null, "onremovefile"),
      onpreparefile: console.info.bind(null, "onpreparefile"),
      // onupdatefiles: console.info.bind(null, 'onupdatefiles'),
      // onactivatefile: console.info.bind(null, "onactivatefile"),
      onactivatefile: (file) => {
        const metadata = file.getMetadata()

        console.info("onactivatefile", file, metadata)

        // const url = file.getFileEncodeDataURL()
        // console.info("onactivatefile", file, url, metadata)
        // debugger
      },
      onreorderfiles: console.info.bind(null, "onreorderfiles"),
    },
  }
}
