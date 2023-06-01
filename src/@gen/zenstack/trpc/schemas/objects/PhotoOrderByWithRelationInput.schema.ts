/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { CloudFileOrderByWithRelationInputObjectSchema } from "./CloudFileOrderByWithRelationInput.schema"
import { ConceptOrderByRelationAggregateInputObjectSchema } from "./ConceptOrderByRelationAggregateInput.schema"
import { PageArtworkOrderByRelationAggregateInputObjectSchema } from "./PageArtworkOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoOrderByWithRelationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.lazy(() => SortOrderSchema).optional(),
    width: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    fileId: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    file: z
      .lazy(() => CloudFileOrderByWithRelationInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(() => PageArtworkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    concepts: z
      .lazy(() => ConceptOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const PhotoOrderByWithRelationInputObjectSchema = Schema
