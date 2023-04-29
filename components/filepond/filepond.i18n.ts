import { UseTranslationResponse } from "react-i18next"
import { FilePondOptions } from "filepond"

export const labels = ({
  t,
}: UseTranslationResponse<"filepond">): Partial<FilePondOptions> => ({
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
    "imageValidateSizeLabelImageSizeTooSmall",
  ),
  imageValidateSizeLabelImageSizeTooBig: t(
    "imageValidateSizeLabelImageSizeTooBig",
  ),
  imageValidateSizeLabelExpectedMinSize: t(
    "imageValidateSizeLabelExpectedMinSize",
  ),
  imageValidateSizeLabelExpectedMaxSize: t(
    "imageValidateSizeLabelExpectedMaxSize",
  ),
  imageValidateSizeLabelImageResolutionTooLow: t(
    "imageValidateSizeLabelImageResolutionTooLow",
  ),
  imageValidateSizeLabelImageResolutionTooHigh: t(
    "imageValidateSizeLabelImageResolutionTooHigh",
  ),
  imageValidateSizeLabelExpectedMinResolution: t(
    "imageValidateSizeLabelExpectedMinResolution",
  ),
  imageValidateSizeLabelExpectedMaxResolution: t(
    "imageValidateSizeLabelExpectedMaxResolution",
  ),
  labelFileLoadError: (_error) => t("labelFileLoadError"),
  labelFileRemoveError: (_error) => t("labelFileRemoveError"),
  labelFileProcessingError: (_error) => t("labelFileProcessingError"),
  labelFileProcessingRevertError: (_error) =>
    t("labelFileProcessingRevertError"),
  labelButtonDownloadItem: t("labelButtonDownloadItem"),
  labelButtonImageOverlay: t("labelButtonImageOverlay"),
  labelButtonManageMetadata: t("labelButtonManageMetadata"),
  labelMinFileDurationExceeded: t("labelMinFileDurationExceeded"),
  labelMinFileDuration: t("labelMinFileDuration"),
  labelMaxFileDurationExceeded: t("labelMaxFileDurationExceeded"),
  labelMaxFileDuration: t("labelMaxFileDuration"),
})
