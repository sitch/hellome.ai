import { useRef } from "react"
import { renderToString } from "react-dom/server"
import { useTranslation } from "next-i18next"

import { FilePond, registerPlugin, type FilePondProps } from "react-filepond"
import { type FilePondFile } from "filepond"
import FilePondPluginDragReorder from "filepond-plugin-drag-reorder"
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
import {
  useFilePondStatus,
  type FilePondStatus,
} from "@/components/filepond/status"
import { useFilePondServer } from "@/components/filepond/useFilePondServer"
import { imageValidateSizeMeasure } from "@/components/filepond/utils"

registerPlugin(
  FilePondPluginDragReorder,
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
  // FilePondPluginFetchSVGPreview,
  // FilePondPluginImagePdfOverlay,
  // FilePondPluginPdfConvert,
)

type ExcludeProps =
  | "files"
  | "credits"
  | "server"
  | "onupdatefiles"
  | "labelIdle"
  | "imageValidateSizeMeasure"
  | "maxParallelUploads"

type FileInputFormProps = {
  // ref?: Ref<FilePond>
  min?: string | number | undefined
  max?: string | number | undefined
  onBlur?: () => void
  onChange?: (values: FilePondFile[]) => void
  value?: FilePondFile[]
}

type FileInputProps = Omit<FilePondProps, ExcludeProps> &
  FileInputFormProps & {
    label?: JSX.Element
    onStatusChange?: (status: FilePondStatus) => void
  }

export function FileInput({
  className,
  label,
  // ref: formRef,
  onChange,
  onBlur,
  min,
  max,
  value = [],
  onStatusChange,
  ...filePondProps
}: FileInputProps) {
  //   export enum Status {
  //     EMPTY = 0,
  //     IDLE = 1,
  //     ERROR = 2,
  //     BUSY = 3,
  //     READY = 4
  // }

  const ref = useRef<FilePond>(null)
  const { server, files, callbacks } = useFilePondServer({
    ref,
    value,
    onBlur,
    onChange,
  })

  const status = useFilePondStatus({
    // files,
    // TODO: fix
    files: value,
    onStatusChange,
  })

  const translation = useTranslation("filepond")

  // // https://stackoverflow.com/questions/60476155/is-it-safe-to-use-ref-current-as-useeffects-dependency-when-ref-points-to-a-dom
  // const [filePondStatus, setFilePondStatus] = useState();

  // const handleStatusRef = useCallback((node: Ref<FilePond>) => {
  //   if(node?.current) {
  //     setFilePondStatus(node.current.status);
  //   }
  // }, []);

  // ref.current.status

  return (
    <>
      <pre>{JSON.stringify(status)}</pre>
      <FilePond
        // ref={handleStatusRef}
        ref={ref}
        // acceptedFileTypes={["image/png", "image/jpeg"]}
        // maxFiles={30}
        // minFileSize={"1KB"}
        // maxFileSize={"12MB"}
        // maxTotalFileSize={"360MB"}
        // imageValidateSizeMinWidth={512}
        // imageValidateSizeMinHeight={512}
        // allowFileSizeValidation={false}

        //======================================================================
        // File Encoding (Base 64)
        //======================================================================
        allowFileEncode={true}
        //======================================================================
        // Core
        //======================================================================
        allowBrowse={true}
        allowMultiple={true}
        allowPaste={true}
        allowProcess={false}
        allowReorder={true}
        allowReplace={true}
        allowRevert={false}
        checkValidity={false}
        storeAsFile={false}
        maxParallelUploads={2}
        itemInsertLocation="after"
        fileSizeBase={1024}
        //======================================================================
        // Input
        //======================================================================
        // captureMethod="camera"
        //======================================================================
        // Core - Drag & Drop
        //======================================================================
        allowDrop={true}
        dropOnPage={true}
        dropOnElement={false}
        dropValidation={false}
        ignoredFiles={[".ds_store", "thumbs.db", "desktop.ini"]}
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
        // Toolbar - GetFile
        //======================================================================
        allowDownloadByUrl={false}
        //======================================================================
        // Toolbar - Metadata
        //======================================================================
        // fileMetadataObject={defaultMetadataObject}
        allowFileMetadata={true}
        enableManageMetadata={false}
        // onManageMetadata={(item: FilePondFile) =>
        //   console.log("onManageMetadata", item)
        // }
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
        server={server}
        instantUpload={true}
        //======================================================================
        // chunkUploads={true}
        // chunkForce={true}
        // chunkSize={50000}
        // chunkSize={5000000}
        // chunkRetryDelays={[500, 1000, 3000]}
        {...callbacks}
        // Props
        //======================================================================
        {...filePondProps}
        className={cn("group", className)}
        credits={false}
      />
    </>
  )
}
