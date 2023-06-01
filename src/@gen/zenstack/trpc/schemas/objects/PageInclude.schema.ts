/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkSchema } from "../PageArtwork.schema"
import { PageTextSchema } from "../PageText.schema"
import { PageCountOutputTypeArgsObjectSchema } from "./PageCountOutputTypeArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkSchema.findMany)])
      .optional(),
    texts: z
      .union([z.boolean(), z.lazy(() => PageTextSchema.findMany)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PageCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageIncludeObjectSchema = Schema
