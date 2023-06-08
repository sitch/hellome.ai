/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkSchema } from "../PageArtwork.schema"
import { PageTextSchema } from "../PageText.schema"
import { PageCountOutputTypeArgsObjectSchema } from "./PageCountOutputTypeArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    status: z.boolean().optional(),
    type: z.boolean().optional(),
    pageNumber: z.boolean().optional(),
    storyId: z.boolean().optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkSchema.findMany)])
      .optional(),
    texts: z
      .union([z.boolean(), z.lazy(() => PageTextSchema.findMany)])
      .optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PageCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageSelectObjectSchema = Schema
