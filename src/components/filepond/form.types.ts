import { type FilePond } from "filepond"

//============================================================================
// Types
//============================================================================

export type AddFileCallbackArgs = Required<Parameters<FilePond["addFile"]>>
export type AddFileCallback = (...args: AddFileCallbackArgs) => void
