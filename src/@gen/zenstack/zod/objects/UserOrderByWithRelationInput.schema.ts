/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { ArtistOrderByWithRelationInputObjectSchema } from "./ArtistOrderByWithRelationInput.schema"
import { AuthorOrderByWithRelationInputObjectSchema } from "./AuthorOrderByWithRelationInput.schema"
import { EditionOrderByRelationAggregateInputObjectSchema } from "./EditionOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserOrderByWithRelationInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    deletedAt: z.lazy(() => SortOrderSchema).optional(),
    artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    author: z.lazy(() => AuthorOrderByWithRelationInputObjectSchema).optional(),
    editions: z
      .lazy(() => EditionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
