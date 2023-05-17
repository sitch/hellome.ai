import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkFindManySchema } from "../findManyPageArtwork.schema"
import { PageTextFindManySchema } from "../findManyPageText.schema"
import { PageCountOutputTypeArgsObjectSchema } from "./PageCountOutputTypeArgs.schema"
import { StoryArgsObjectSchema } from "./StoryArgs.schema"

const Schema: z.ZodType<Prisma.PageInclude> = z
  .object({
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    artworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    texts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PageCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageIncludeObjectSchema = Schema
