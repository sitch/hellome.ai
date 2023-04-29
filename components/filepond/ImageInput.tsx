import { renderToString } from "react-dom/server"
import { useTranslation } from "next-i18next"

import { FilePond, FilePondProps, registerPlugin } from "react-filepond"
import { FilePondFile } from "filepond"
import FilepondPluginDragReorder from "filepond-plugin-drag-reorder"
import FilePondPluginFileEncode from "filepond-plugin-file-encode"
import FilePondPluginFileMetadata from "filepond-plugin-file-metadata"
import FilePondPluginFileValidateDuration from "filepond-plugin-file-validate-duration"
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginGetFile from "filepond-plugin-get-file"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImageOverlay from "filepond-plugin-image-overlay"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size"
import FilePondPluginManageMetadata from "filepond-plugin-manage-metadata"
import FilePondPluginMediaPreview from "filepond-plugin-media-preview"
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview"

// import FilePondPluginFetchSVGPreview from "filepond-plugin-fetch-svg-preview"
// import FilePondPluginImagePdfOverlay from "filepond-plugin-image-pdf-overlay"
// import FilePondPluginPdfConvert from "filepond-plugin-pdf-convert"

import { cn } from "@/lib/utils"

import { LabelIdle } from "@/components/filepond/LabelIdle"
import { labels } from "@/components/filepond/filepond.i18n"
import { useFilepondServer } from "@/components/filepond/filepond.server"
import { imageValidateSizeMeasure } from "@/components/filepond/utils"

registerPlugin(
  FilepondPluginDragReorder,
  FilePondPluginFileEncode,
  FilePondPluginFileMetadata,
  FilePondPluginFileValidateDuration,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginGetFile,
  FilePondPluginImageExifOrientation,
  FilePondPluginImageOverlay,
  FilePondPluginImagePreview,
  FilePondPluginImageValidateSize,
  FilePondPluginManageMetadata,
  FilePondPluginMediaPreview,
  FilePondPluginPdfPreview,
)

type ExcludeProps =
  | "files"
  | "credits"
  | "server"
  | "onupdatefiles"
  | "labelIdle"
  | "imageValidateSizeMeasure"
  | "maxParallelUploads"

type Props<T = object> = Omit<FilePondProps, ExcludeProps> & {
  label?: JSX.Element
  mode?: typeof process.env.NODE_ENV
  value?: T[] | undefined
  onChange?: (values: T[]) => void
}

const defaultMetadataObject = {}

export function ImageInput<T>({
  mode = "production",
  label,
  // cast,
  onChange,
  className,
  value = [],
  ...filePondProps
}: Props<T>) {
  const { files, onupdatefiles, server } = useFilepondServer()
  const translation = useTranslation("filepond")

  return (
    <>
      {/* <LabelIdle {...translation} /> */}
      <FilePond
        //======================================================================
        // File Encoding (Base 64)
        //======================================================================
        allowFileEncode={true}
        //======================================================================
        // Uploads
        //======================================================================
        allowMultiple={true}
        //======================================================================
        // Previews - Image
        //======================================================================
        allowImagePreview={true}
        allowImageExifOrientation={true}
        //======================================================================
        // Previews - Media
        //======================================================================
        allowAudioPreview={true}
        allowVideoPreview={true}
        //======================================================================
        // Drag & Drop
        //======================================================================
        allowDrop={true}
        allowReorder={true}
        allowReplace={true}
        dropOnPage={true}
        dropOnElement={false}
        dropValidation={false}
        itemInsertLocation="after"
        //======================================================================
        // Toolbar - GetFile
        //======================================================================
        allowDownloadByUrl={false}
        //======================================================================
        // Toolbar - Metadata
        //======================================================================
        fileMetadataObject={defaultMetadataObject}
        allowFileMetadata={true}
        enableManageMetadata={true}
        onManageMetadata={(item: FilePondFile) =>
          console.log("onManageMetadata hook called", item)
        }
        //======================================================================
        // Validation - File Types
        //======================================================================
        allowFileTypeValidation={true}
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
        ignoredFiles={[".ds_store", "thumbs.db", "desktop.ini"]}
        //======================================================================
        // Validation - File Size
        //======================================================================
        allowFileSizeValidation={true}
        //======================================================================
        // Validation - Image Size
        //======================================================================
        allowImageValidateSize={true}
        imageValidateSizeMeasure={imageValidateSizeMeasure}
        //======================================================================
        // Validation - Media Duration
        //======================================================================
        allowFileDurationValidation={true}
        //======================================================================
        // PDF
        //======================================================================
        // allowPdfPreview={true}
        // pdfPreviewHeight={320}
        // pdfComponentExtraParams={"toolbar=0&view=fit&page=1"}
        //======================================================================
        // i18n
        //======================================================================
        {...labels(translation)}
        labelIdle={renderToString(label ?? <LabelIdle {...translation} />)}
        //======================================================================
        // Server
        //======================================================================
        files={files}
        onupdatefiles={onupdatefiles}
        server={server}
        instantUpload={true}
        maxParallelUploads={2}
        // TODO: disable on max in put?
        allowProcess={false}
        //======================================================================
        // Props
        //======================================================================
        {...filePondProps}
        className={cn("group", className)}
        credits={false}
      />
    </>
  )
}
