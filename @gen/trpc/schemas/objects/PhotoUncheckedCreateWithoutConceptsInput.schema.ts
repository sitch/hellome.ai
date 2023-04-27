import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutPhotoInput.schema"
import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateWithoutConceptsInput> = z
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
    fileId: z.string(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PhotoUncheckedCreateWithoutConceptsInputObjectSchema = Schema
