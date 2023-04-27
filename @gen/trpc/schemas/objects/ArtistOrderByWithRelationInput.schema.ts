import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PageArtworkOrderByRelationAggregateInputObjectSchema } from "./PageArtworkOrderByRelationAggregateInput.schema"
import { StoryOrderByRelationAggregateInputObjectSchema } from "./StoryOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<Prisma.ArtistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    stories: z
      .lazy(() => StoryOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const ArtistOrderByWithRelationInputObjectSchema = Schema
