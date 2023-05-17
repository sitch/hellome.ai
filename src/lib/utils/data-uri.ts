export type MIMEType = "application/zip"

export type DataURI = string

export function encodeDataURI(mime: MIMEType, content: string): DataURI {
  return `data:${mime};base64,${content}`
}
