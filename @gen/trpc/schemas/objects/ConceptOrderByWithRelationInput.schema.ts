import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PhotoOrderByRelationAggregateInputObjectSchema } from "./PhotoOrderByRelationAggregateInput.schema"

const Schema: z.ZodType<Prisma.ConceptOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    photos: z
      .lazy(() => PhotoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const ConceptOrderByWithRelationInputObjectSchema = Schema