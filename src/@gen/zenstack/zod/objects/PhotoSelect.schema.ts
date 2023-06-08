/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptSchema } from "../Concept.schema"
import { PageArtworkSchema } from "../PageArtwork.schema"
import { CloudFileArgsObjectSchema } from "./CloudFileArgs.schema"
import { PhotoCountOutputTypeArgsObjectSchema } from "./PhotoCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PhotoSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    height: z.boolean().optional(),
    width: z.boolean().optional(),
    tags: z.boolean().optional(),
    fileId: z.boolean().optional(),
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkSchema.findMany)])
      .optional(),
    concepts: z
      .union([z.boolean(), z.lazy(() => ConceptSchema.findMany)])
      .optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PhotoCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PhotoSelectObjectSchema = Schema
