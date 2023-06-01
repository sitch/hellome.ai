/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateNestedOneWithoutPhotoInputObjectSchema } from "./CloudFileCreateNestedOneWithoutPhotoInput.schema"
import { ConceptCreateNestedManyWithoutPhotosInputObjectSchema } from "./ConceptCreateNestedManyWithoutPhotosInput.schema"
import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCreateWithoutPageArtworksInput,
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
    file: z.lazy(() => CloudFileCreateNestedOneWithoutPhotoInputObjectSchema),
    concepts: z
      .lazy(() => ConceptCreateNestedManyWithoutPhotosInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoCreateWithoutPageArtworksInputObjectSchema = Schema
