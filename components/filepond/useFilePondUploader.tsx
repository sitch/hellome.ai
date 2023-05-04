import { useCallback, useRef, useState, type RefObject } from "react"

import { type FilePond, type FilePondProps } from "react-filepond"
import { type FilePondFile } from "filepond"
import { isEqual } from "lodash"

import {
  useFilePondServer,
  type ServerMode,
} from "@/components/filepond/useFilePondServer"
import {
  initialFilePondStatus,
  verifyStatus,
  type FilePondStatus,
} from "@/components/filepond/useFilePondStatus"

export type UseFilePondUploaderProps = {
  mode?: ServerMode
  initialFiles?: FilePondFile[]
}

export type UseFilePondUploaderHook = {
  ref: RefObject<FilePond>
  status: FilePondStatus
  files: FilePondFile[]
  props: Partial<FilePondProps>
}

export const useFilePondUploader = ({
  initialFiles = [],
  mode = "production",
}: UseFilePondUploaderProps) => {
  const onBlur = () => {}
  const onChange = (...args: any[]) => {
    console.warn("ON_CHANGE", ...args)
  }

  // const translation = useTranslation("filepond")

  // const status = useRef<FilePondStatus>(initialFilePondStatus)

  const [status, setStatus] = useState<FilePondStatus>(initialFilePondStatus)

  const pondRef = useRef<FilePond>(null)

  const { server, files, callbacks } = useFilePondServer({
    mode,
    value: initialFiles,
    onBlur,
    onChange,
  })
  // const { status } = useFilePondStatus({
  // useFilePondStatus({
  //   files,
  //   onStatusChange: setStatus,
  // })

  const handleStatus = useCallback(() => {
    const nextStatus = verifyStatus(files)

    if (!isEqual(status, nextStatus)) {
      setStatus(nextStatus)
    }
  }, [status, files])

  // useEffect(handleStatus, [handleStatus])

  const filePondInputProps = {
    ...callbacks,
    server,
    files: files.map(({ file }) => file),
  }

  return {
    ref: pondRef,
    status,
    // files,
    props: filePondInputProps,
  }
}
