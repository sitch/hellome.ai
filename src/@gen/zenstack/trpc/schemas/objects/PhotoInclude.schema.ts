/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptSchema } from "../Concept.schema"
import { PageArtworkSchema } from "../PageArtwork.schema"
import { CloudFileArgsObjectSchema } from "./CloudFileArgs.schema"
import { PhotoCountOutputTypeArgsObjectSchema } from "./PhotoCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PhotoInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkSchema.findMany)])
      .optional(),
    concepts: z
      .union([z.boolean(), z.lazy(() => ConceptSchema.findMany)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PhotoCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PhotoIncludeObjectSchema = Schema
