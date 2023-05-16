import JSZip from "jszip"

import { encodeDataURI, type DataURI } from "@/lib/utils/data-uri"

export type ZipFile = {
  filename: string
  content: string
}

/**
 * @link https://github.com/replicate/replicate-javascript/pull/63/files
 */
export async function encodeBase64ZipFile(files: ZipFile[]): Promise<DataURI> {
  const zip = new JSZip()

  // Add files
  files.forEach(({ filename, content }) => zip.file(filename, content))

  // Encode archive
  return await zip.generateAsync({ type: "base64" }).then((content) => {
    return encodeDataURI("application/zip", content)
  })
}
