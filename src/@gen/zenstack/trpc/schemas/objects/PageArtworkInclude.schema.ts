/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistArgsObjectSchema } from "./ArtistArgs.schema"
import { PageArgsObjectSchema } from "./PageArgs.schema"
import { PhotoArgsObjectSchema } from "./PhotoArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageArtworkInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageArtworkIncludeObjectSchema = Schema
