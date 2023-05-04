import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

import { FileStatus, type FilePondFile } from "filepond"

export const initialFilePondStatus: FilePondStatus = {
  disabled: false,
  valid: true,
  loading: false,
  // ready: true,
  // uploading: false,
  // processing: false,
  // complete: true,
  hasError: false,
  // errors: [],
}

export type FilePondStatus = {
  valid: boolean
  loading: boolean
  disabled: boolean

  // processing: boolean
  // ready: boolean
  // uploading: boolean
  // complete: boolean
  hasError: boolean
  // errors: string[]
}

//   export enum FileStatus {
//     INIT = 1,
//     IDLE = 2,
//     PROCESSING_QUEUED = 9,
//     PROCESSING = 3,
//     PROCESSING_COMPLETE = 5,
//     PROCESSING_ERROR = 6,
//     PROCESSING_REVERT_ERROR = 10,
//     LOADING = 7,
//     LOAD_ERROR = 8
// }

export function verifyStatus(files: FilePondFile[]): FilePondStatus {
  if (files.length === 0) {
    return initialFilePondStatus
  }

  const processing = files.some(({ status }) =>
    [FileStatus.PROCESSING, FileStatus.PROCESSING_QUEUED].includes(status),
  )
  const loading = files.some(({ status }) =>
    [FileStatus.LOADING].includes(status),
  )

  const hasError = files.some(({ status }) =>
    [
      FileStatus.PROCESSING_ERROR,
      FileStatus.PROCESSING_REVERT_ERROR,
      FileStatus.LOAD_ERROR,
    ].includes(status),
  )

  const valid = files.every(({ status }) =>
    [FileStatus.PROCESSING_COMPLETE].includes(status),
  )

  const disabled = loading || processing || hasError || !valid

  const ready = false
  const uploading = false

  return {
    disabled,
    loading: processing || loading,
    valid,
    // processing,
    // complete,
    // ready,
    // uploading,
    hasError,
    // errors: [],
  }
}

export type UseFilePondStatusProps = {
  files: FilePondFile[]
  onStatusChange?: (status: FilePondStatus) => void
}

export type UseFilePondStatusHook = {
  status: FilePondStatus
  setStatus: Dispatch<SetStateAction<FilePondStatus>>
}

export function useFilePondStatus({
  files,
  onStatusChange,
}: UseFilePondStatusProps): UseFilePondStatusHook {
  const [status, setStatus] = useState<FilePondStatus>(verifyStatus(files))

  useEffect(() => {
    const nextStatus = verifyStatus(files)

    if (status !== nextStatus) {
      setStatus(nextStatus)
      onStatusChange?.(nextStatus)
    }
  }, [status, files, onStatusChange])

  return { status, setStatus }
}
