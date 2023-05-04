import { type Prisma } from "@prisma/client"
import { type FilePondFile, type FilePondInitialFile } from "filepond"
import { type z } from "zod"

import { getImageSize } from "@/components/filepond/utils"

import { CloudFileSchema, PhotoSchema } from "@/@gen/zod"

//============================================================================
// Schema
//============================================================================

export const CreateCloudFileSchema = CloudFileSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})
export const CreatePhotoSchema = PhotoSchema.omit({
  id: true,
  fileId: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  file: CreateCloudFileSchema,
})

export type CreateCloudFileSchemaType = z.infer<typeof CreateCloudFileSchema>
export type CreatePhotoSchemaType = z.infer<typeof CreatePhotoSchema>

//============================================================================
// Cast
//============================================================================

export function castCloudFileCreateWithoutPhotoInput(
  file: FilePondFile,
): Prisma.CloudFileCreateWithoutPhotoInput {
  const { key, bucket, url: publicUrl, ...metadata } = file.getMetadata()

  return {
    filename: file.filename,
    stem: file.filenameWithoutExtension,
    extension: file.fileExtension,
    size: file.fileSize,
    mime: file.fileType,
    metadata,

    key,
    bucket,
    publicUrl,

    // TODO: These should be specified somehow
    // defaults
    region: "USEast1",
    resourceType: "image",
    privacy: "private",
  }
}

export async function castPhotoCreateInput(
  file: FilePondFile,
): Promise<Prisma.PhotoCreateInput> {
  const { height, width } = await getImageSize(file.file as File)

  return {
    height,
    width,
    tags: ["concept:training"],
    file: {
      create: castCloudFileCreateWithoutPhotoInput(file),
    },
  }
}

// https://github.com/pqina/filepond/issues/192
export const castInitialFile = (url: string): FilePondInitialFile => {
  return {
    source: url,
    options: {
      type: "local",
    },
  }
}
