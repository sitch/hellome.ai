import { z } from "zod"

import { PageTextCountAggregateInputObjectSchema } from "./objects/PageTextCountAggregateInput.schema"
import { PageTextMaxAggregateInputObjectSchema } from "./objects/PageTextMaxAggregateInput.schema"
import { PageTextMinAggregateInputObjectSchema } from "./objects/PageTextMinAggregateInput.schema"
import { PageTextOrderByWithRelationInputObjectSchema } from "./objects/PageTextOrderByWithRelationInput.schema"
import { PageTextWhereInputObjectSchema } from "./objects/PageTextWhereInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./objects/PageTextWhereUniqueInput.schema"

export const PageTextAggregateSchema = z.object({
  orderBy: z
    .union([
      PageTextOrderByWithRelationInputObjectSchema,
      PageTextOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PageTextWhereInputObjectSchema.optional(),
  cursor: PageTextWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PageTextCountAggregateInputObjectSchema])
    .optional(),
  _min: PageTextMinAggregateInputObjectSchema.optional(),
  _max: PageTextMaxAggregateInputObjectSchema.optional(),
})
