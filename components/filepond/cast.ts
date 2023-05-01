import { FilePondProps } from "react-filepond"
import { type FilePondFile, type FilePondInitialFile } from "filepond"

import { type FormSchemaType } from "@/components/forms/ConceptForm"

import { getImageSize } from "./utils"

// import { getImageSize } from "next/dist/server/image-optimizer"

type ImageInput = FormSchemaType["photos"][number]

export const cast = async (
  file: FilePondFile,
  // metadata: FilePondInitialFile["options"]["metadata"],
): ImageInput => {
  const meta = file.getMetadata() as Record<string, string | number>
  const status = file.status

  console.log("file", status, { file, meta })

  const { height, width } = await getImageSize(file.file)

  return {
    // id: file.serverId ,
    // fileId: file.serverId,

    // height: file.getMetadata('height'),
    // width: file.getMetadata('width'),

    height,
    width,

    // height: metadata?.height as number,
    // width: metadata?.width as number,
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
      // mime: metadata?.mime ?? file.fileType,
      mime: file.fileType,
      metadata: meta,
    },
  }
}

export const uncast = (
  photo: ImageInput,
): NonNullable<FilePondProps["files"]>[number] => {
  // created already
  // if(photo.id) {

  // }

  // return photo

  return {
    source: photo.file.signature,
    options: {
      //
    },
  }

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
