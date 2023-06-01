/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCreateNestedManyWithoutPhotosInputObjectSchema } from "./ConceptCreateNestedManyWithoutPhotosInput.schema"
import { PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema } from "./PageArtworkCreateNestedManyWithoutPhotoInput.schema"
import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCreateWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.number(),
    width: z.number(),
    tags: z
      .union([
        z.lazy(() => PhotoCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pageArtworks: z
      .lazy(() => PageArtworkCreateNestedManyWithoutPhotoInputObjectSchema)
      .optional(),
    concepts: z
      .lazy(() => ConceptCreateNestedManyWithoutPhotosInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoCreateWithoutFileInputObjectSchema = Schema
