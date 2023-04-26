import { FilePondOptions } from "filepond"
import { TFunction } from "next-i18next"

export const labels = (t: TFunction): Partial<FilePondOptions> => ({
  labelMaxFileSize: t("labelMaxFileSize"),
  labelMaxFileSizeExceeded: t("labelMaxFileSizeExceeded"),
  labelMaxTotalFileSize: t("labelMaxTotalFileSize"),
  labelMaxTotalFileSizeExceeded: t("labelMaxTotalFileSizeExceeded"),
  fileValidateTypeLabelExpectedTypes: t("fileValidateTypeLabelExpectedTypes"),
  labelButtonAbortItemLoad: t("labelButtonAbortItemLoad"),
  labelButtonAbortItemProcessing: t("labelButtonAbortItemProcessing"),
  labelButtonProcessItem: t("labelButtonProcessItem"),
  labelButtonRemoveItem: t("labelButtonRemoveItem"),
  labelButtonRetryItemLoad: t("labelButtonRetryItemLoad"),
  labelButtonRetryItemProcessing: t("labelButtonRetryItemProcessing"),
  labelButtonUndoItemProcessing: t("labelButtonUndoItemProcessing"),
  labelDecimalSeparator: t("labelDecimalSeparator"),
  labelFileAdded: t("labelFileAdded"),
  labelFileCountPlural: t("labelFileCountPlural"),
  labelFileCountSingular: t("labelFileCountSingular"),
  labelFileLoading: t("labelFileLoading"),
  labelFileProcessing: t("labelFileProcessing"),
  labelFileProcessingAborted: t("labelFileProcessingAborted"),
  labelFileProcessingComplete: t("labelFileProcessingComplete"),
  labelFileRemoved: t("labelFileRemoved"),
  labelFileSizeNotAvailable: t("labelFileSizeNotAvailable"),
  labelFileWaitingForSize: t("labelFileWaitingForSize"),
  labelIdle: t("labelIdle"),
  labelInvalidField: t("labelInvalidField"),
  labelTapToCancel: t("labelTapToCancel"),
  labelTapToRetry: t("labelTapToRetry"),
  labelTapToUndo: t("labelTapToUndo"),
  labelThousandsSeparator: t("labelThousandsSeparator"),
  labelFileTypeNotAllowed: t("labelFileTypeNotAllowed"),
  imageValidateSizeLabelFormatError: t("imageValidateSizeLabelFormatError"),
  imageValidateSizeLabelImageSizeTooSmall: t(
    "imageValidateSizeLabelImageSizeTooSmall"
  ),
  imageValidateSizeLabelImageSizeTooBig: t(
    "imageValidateSizeLabelImageSizeTooBig"
  ),
  imageValidateSizeLabelExpectedMinSize: t(
    "imageValidateSizeLabelExpectedMinSize"
  ),
  imageValidateSizeLabelExpectedMaxSize: t(
    "imageValidateSizeLabelExpectedMaxSize"
  ),
  imageValidateSizeLabelImageResolutionTooLow: t(
    "imageValidateSizeLabelImageResolutionTooLow"
  ),
  imageValidateSizeLabelImageResolutionTooHigh: t(
    "imageValidateSizeLabelImageResolutionTooHigh"
  ),
  imageValidateSizeLabelExpectedMinResolution: t(
    "imageValidateSizeLabelExpectedMinResolution"
  ),
  imageValidateSizeLabelExpectedMaxResolution: t(
    "imageValidateSizeLabelExpectedMaxResolution"
  ),
  labelFileLoadError: (_error) => t("labelFileLoadError"),
  labelFileRemoveError: (_error) => t("labelFileRemoveError"),
  labelFileProcessingError: (_error) => t("labelFileProcessingError"),
  labelFileProcessingRevertError: (_error) =>
    t("labelFileProcessingRevertError"),
})

export const defaults: Record<string, Partial<FilePondOptions>> = {
  FilepondPluginFileValidateSize: {
    allowFileSizeValidation: true,
    minFileSize: "1KB",
    maxFileSize: "10MB",
    maxTotalFileSize: "100MB",
  },
  FilepondPluginFileValidateType: {
    allowFileTypeValidation: true,
    acceptedFileTypes: [
      // 'image/*',

      "image/png",
      "image/jpeg",
    ],

    fileValidateTypeLabelExpectedTypesMap: {
      "image/bmp": ".bmp",
      "image/gif": ".gif",
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/svg+xml": ".svg",
      "image/tiff": ".tiff",
      "image/webp": ".webp",
    },
    // fileValidateTypeDetectType: (source, type) =>
    //   new Promise((resolve, reject) => {
    //     // test if is xls file
    //     if (source.name.endsWith('.xls'))
    //       return resolve('application/vnd.ms-excel')

    //     // accept detected type
    //     resolve(type)
    //   }),
  },
  FilePondPluginImageExifOrientation: {
    allowImageExifOrientation: true,
  },
  FilePondPluginImagePreview: {
    allowImagePreview: true,
    // imagePreviewMinHeight: 44,
    // imagePreviewMaxHeight: 256,
    // imagePreviewHeight: undefined,
    // imagePreviewMaxFileSize: undefined,
    // imagePreviewTransparencyIndicator: undefined,
    // // imagePreviewTransparencyIndicator: 'grid',
    // imagePreviewMaxInstantPreviewFileSize: 1000000,
    // imagePreviewMarkupShow: true,
    // imagePreviewMarkupFilter: (_markupItem) => true,
    // imagePreviewFilterItem: (_fileItem) => true,
  },
  FilePondPluginImageEdit: {
    // // default crop aspect ratio
    // imageCropAspectRatio: 1,
    // // resize to width of 200
    // imageResizeTargetWidth: 200,
    // // open editor on image drop
    // imageEditInstantEdit: true,
    // // configure Doka
    // imageEditEditor: Doka.create({
    //     // Doka.js options here ...
    //     cropAspectRatioOptions: [
    //         {
    //             label: 'Free',
    //             value: null,
    //         },
    //         {
    //             label: 'Portrait',
    //             value: 1.25,
    //         },
    //         {
    //             label: 'Square',
    //             value: 1,
    //         },
    //         {
    //             label: 'Landscape',
    //             value: 0.75,
    //         },
    //     ],
    // }),
  },
  FilePondPluginImageValidateSize: {
    allowImageValidateSize: true,
  },
  icons: {
    iconRemove:
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>',
    iconProcess: "",
    iconRetry: "",
    iconUndo: "",
    iconDone: "",
  },
}
