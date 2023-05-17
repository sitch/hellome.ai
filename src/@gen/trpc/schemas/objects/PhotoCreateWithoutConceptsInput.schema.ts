import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateNestedOneWithoutPhotoInputObjectSchema } from "./CloudFileCreateNestedOneWithoutPhotoInput.schema"
import { PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutPhotoInput.schema"
import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<Prisma.PhotoCreateWithoutConceptsInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    tags: z
      .union([
        z.lazy(() => PhotoCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    file: z.lazy(() => CloudFileCreateNestedOneWithoutPhotoInputObjectSchema),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoCreateWithoutConceptsInputObjectSchema = Schema
