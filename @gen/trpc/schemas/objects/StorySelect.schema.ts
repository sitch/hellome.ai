import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageFindManySchema } from "../findManyPage.schema"
import { PageArtworkFindManySchema } from "../findManyPageArtwork.schema"
import { PageTextFindManySchema } from "../findManyPageText.schema"
import { ArtistArgsObjectSchema } from "./ArtistArgs.schema"
import { AuthorArgsObjectSchema } from "./AuthorArgs.schema"
import { StoryCountOutputTypeArgsObjectSchema } from "./StoryCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.StorySelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    artistId: z.boolean().optional(),
    authorId: z.boolean().optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    pages: z.union([z.boolean(), z.lazy(() => PageFindManySchema)]).optional(),
    pageArtworks: z
      .union([z.boolean(), z.lazy(() => PageArtworkFindManySchema)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const StorySelectObjectSchema = Schema
