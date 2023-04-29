import { FilePondFile, FilePondInitialFile } from "filepond"

import { FormSchemaType } from "@/components/forms/ConceptForm"

type ImageInput = FormSchemaType["photos"][number]

export const cast = (
  file: FilePondFile,
  metadata: FilePondInitialFile["options"]["metadata"],
): ImageInput => {
  const meta = file.getMetadata() as Record<string, string | number>
  const status = file.status

  console.log("file", status, { file, meta })

  return {
    // id: file.serverId ,
    // fileId: file.serverId,
    height: metadata?.height as number,
    width: metadata?.width as number,
    tags: [],
    file: {
      // serverId: file.serverId,
      signature: "signature",
      path: "path",
      //
      resourceType: "image",
      privacy: "private",
      filename: file.filename,
      size: file.fileSize,
      ext: file.fileExtension,
      mime: metadata?.mime ?? file.fileType,
      metadata: meta,
    },
  }
}
