import { z } from "zod"

import { PageAvgAggregateInputObjectSchema } from "./objects/PageAvgAggregateInput.schema"
import { PageCountAggregateInputObjectSchema } from "./objects/PageCountAggregateInput.schema"
import { PageMaxAggregateInputObjectSchema } from "./objects/PageMaxAggregateInput.schema"
import { PageMinAggregateInputObjectSchema } from "./objects/PageMinAggregateInput.schema"
import { PageOrderByWithRelationInputObjectSchema } from "./objects/PageOrderByWithRelationInput.schema"
import { PageSumAggregateInputObjectSchema } from "./objects/PageSumAggregateInput.schema"
import { PageWhereInputObjectSchema } from "./objects/PageWhereInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./objects/PageWhereUniqueInput.schema"

export const PageAggregateSchema = z.object({
  orderBy: z
    .union([
      PageOrderByWithRelationInputObjectSchema,
      PageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PageWhereInputObjectSchema.optional(),
  cursor: PageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PageCountAggregateInputObjectSchema])
    .optional(),
  _min: PageMinAggregateInputObjectSchema.optional(),
  _max: PageMaxAggregateInputObjectSchema.optional(),
  _avg: PageAvgAggregateInputObjectSchema.optional(),
  _sum: PageSumAggregateInputObjectSchema.optional(),
})
