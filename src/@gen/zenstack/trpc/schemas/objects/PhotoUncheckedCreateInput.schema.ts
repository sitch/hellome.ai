/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptUncheckedCreateNestedManyWithoutPhotosInputObjectSchema } from "./ConceptUncheckedCreateNestedManyWithoutPhotosInput.schema"
import { PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutPhotoInput.schema"
import { PhotoCreatetagsInputObjectSchema } from "./PhotoCreatetagsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoUncheckedCreateInput,
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
    fileId: z.string(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pageArtworks: z
      .lazy(
        () => PageArtworkUncheckedCreateNestedManyWithoutPhotoInputObjectSchema,
      )
      .optional(),
    concepts: z
      .lazy(
        () => ConceptUncheckedCreateNestedManyWithoutPhotosInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const PhotoUncheckedCreateInputObjectSchema = Schema
