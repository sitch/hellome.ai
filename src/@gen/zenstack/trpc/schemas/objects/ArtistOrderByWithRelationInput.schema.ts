/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PageArtworkOrderByRelationAggregateInputObjectSchema } from "./PageArtworkOrderByRelationAggregateInput.schema"
import { StoryOrderByRelationAggregateInputObjectSchema } from "./StoryOrderByRelationAggregateInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistOrderByWithRelationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    stories: z
      .lazy(() => StoryOrderByRelationAggregateInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const ArtistOrderByWithRelationInputObjectSchema = Schema
