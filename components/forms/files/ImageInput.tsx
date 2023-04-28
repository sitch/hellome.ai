import { useState } from "react"
import { renderToString } from "react-dom/server"
import { useTranslation } from "next-i18next"
import { useS3Upload } from "next-s3-upload"

import { FilePondFile, FilePondInitialFile } from "filepond"
import FilePondPluginFileEncode from "filepond-plugin-file-encode"
import FilePondPluginFileMetadata from "filepond-plugin-file-metadata"
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size"
import { FilePond, FilePondProps, registerPlugin } from "react-filepond"

// import {imageSize} from 'image-size'

import { cn } from "@/lib/utils"

import { LabelIdle } from "./LabelIdle"
import { labels } from "./filepond.config"
import { fileToBase64, imageValidateSizeMeasure } from "./utils"

// import "filepond/dist/filepond.css"
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css"

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileMetadata,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageValidateSize,
)

const BYPASS_SERVER: FilePondProps["server"] = {
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
}

type Props<T = object> = Omit<FilePondProps, "credits" | "onupdatefiles "> & {
  label?: JSX.Element
  mode?: typeof process.env.NODE_ENV
  // Add types here
  value?: T[] | undefined
  // cast: (values: T[]) => FilePondProps['files']
  cast?: (
    file: FilePondFile,
    metadata: FilePondInitialFile["options"]["metadata"],
  ) => T
  onChange?: (values: T[]) => void
}

export function ImageInput<T>({
  mode = "production",
  label,
  // cast,
  onChange,
  className,
  value = [],
  ...filePondProps
}: Props<T>) {
  const { t } = useTranslation("filepond")
  const [files, setFiles] = useState<FilePondProps["files"]>([])

  const [imageUrl, setImageUrl] = useState<string>()
  const { files: s3Files, uploadToS3 } = useS3Upload()

  const cast = (
    file: FilePondFile,
    metadata: FilePondInitialFile["options"]["metadata"],
  ): T => {
    const meta = file.getMetadata() as Record<string, string | number>
    const status = file.status

    console.log("file", status, { file, meta })

    return {
      // TODO: REMOVE ID
      id: file.serverId,
      fileId: file.serverId,
      height: metadata?.height as number,
      width: metadata?.width as number,
      createdAt: new Date(),
      tags: [],
      pageArtworks: [],
      concepts: [],
      file: {
        // TODO: REMOVE ID
        id: file.serverId,
        createdAt: new Date(),
        signature: "signature",
        path: "path",
        // updatedAt: new Date().toString(),
        //
        //

        resourceType: "image",
        privacy: "private",
        filename: file.filename,
        size: file.fileSize,
        ext: file.fileExtension,
        mime: metadata?.mime ?? file.fileType,
        metadata,
      },
    } as T
  }

  const server: FilePondProps["server"] = {
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
  }

  return (
    <>
      <FilePond
        files={files}
        onupdatefiles={(files) => setFiles(files.map(({ file }) => file))}
        server={process.env.NODE_ENV !== mode ? BYPASS_SERVER : server}
        credits={false}
        allowDrop={true}
        allowFileMetadata={true}
        allowFileSizeValidation={true}
        allowFileTypeValidation={true}
        allowImageExifOrientation={true}
        allowImageValidateSize={true}
        allowImagePreview={true}
        allowMultiple={true}
        allowProcess={false}
        allowReorder={true}
        allowReplace={true}
        imageValidateSizeMeasure={imageValidateSizeMeasure}
        dropOnPage={true}
        dropOnElement={false}
        dropValidation={false}
        instantUpload={true}
        maxParallelUploads={2}
        // itemInsertLocation="after"
        ignoredFiles={[".ds_store", "thumbs.db", "desktop.ini"]}
        acceptedFileTypes={["image/*"]}
        fileValidateTypeLabelExpectedTypesMap={{
          "image/bmp": ".bmp",
          "image/gif": ".gif",
          "image/jpeg": ".jpg",
          "image/png": ".png",
          "image/svg+xml": ".svg",
          "image/tiff": ".tiff",
          "image/webp": ".webp",
        }}
        {...labels(t)}
        {...filePondProps}
        labelIdle={renderToString(label ?? <LabelIdle />)}
        className={cn("group", className)}
      />
    </>
  )
}
