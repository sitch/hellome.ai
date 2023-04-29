declare module "filepond" {
  import type * as Filepond from "filepond/types/index.d"
  export type * from "filepond/types/index.d"

  export interface FilePondOptions extends Filepond.FilePondOptions {
    /**
     * Source: "filepond-plugin-image-overlay"
     * Source: "filepond-plugin-image-pdf-overlay"
     * Label for button
     *
     * @default "Open image in overlay"
     * @type string
     */
    labelButtonImageOverlay?: string

    /**
     * Source: "filepond-plugin-manage-metadata"
     * Enable plugin
     *
     * @default true
     * @type boolean
     */
    enableManageMetadata?: boolean

    /**
     * Source: "filepond-plugin-manage-metadata"
     * Label for button
     *
     * @default "Edit metadata"
     * @type string
     */
    labelButtonManageMetadata?: string

    /**
     * Source: "filepond-plugin-manage-metadata"
     * Metadata callback
     *
     * @default null
     * @type (item: FilePond.FilePondFile) => void
     */
    onManageMetadata?: (item: FilePond.FilePondFile) => void

    /**
     * Source: "filepond-plugin-media-preview"
     * Enable audio
     *
     * @default true
     * @type boolean
     */
    allowAudioPreview?: boolean

    /**
     * Source: "filepond-plugin-media-preview"
     * Enable video
     *
     * @default true
     * @type boolean
     */
    allowVideoPreview?: boolean

    /**
     * Source: "filepond-plugin-pdf-preview"
     * Enable plugin
     *
     * @default true
     * @type boolean
     */
    allowPdfPreview?: boolean

    /**
     * Source: "filepond-plugin-pdf-preview"
     * Fixed PDF preview height
     *
     * @default 320
     * @type number
     */
    pdfPreviewHeight?: number

    /**
     * Source: "filepond-plugin-pdf-preview"
     * Extra params to pass to the pdf visualizer
     *
     * @default "toolbar=0&navpanes=0&scrollbar=0&statusbar=0&zoom=0&messages=0&view=fitH&page=1"
     * @type string
     */
    pdfComponentExtraParams?: string
  }
}

// Declarations for modules without types
declare module "filepond-plugin-drag-reorder"
declare module "filepond-plugin-image-overlay"
declare module "filepond-plugin-image-pdf-overlay"
declare module "filepond-plugin-manage-metadata"
declare module "filepond-plugin-media-preview"
declare module "filepond-plugin-pdf-preview"

// Extra plugins
declare module "base64image-dimensions"
