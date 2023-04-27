import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptUncheckedCreateNestedManyWithoutPhotosInputObjectSchema } from "./ConceptUncheckedCreateNestedManyWithoutPhotosInput.schema"
import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateWithoutPageArtworksInput> = z
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
    concepts: z
      .lazy(
        () => ConceptUncheckedCreateNestedManyWithoutPhotosInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema = Schema
