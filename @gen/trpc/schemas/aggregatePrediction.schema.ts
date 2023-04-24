import { z } from 'zod'
import { PredictionOrderByWithRelationInputObjectSchema } from './objects/PredictionOrderByWithRelationInput.schema'
import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'
import { PredictionCountAggregateInputObjectSchema } from './objects/PredictionCountAggregateInput.schema'
import { PredictionMinAggregateInputObjectSchema } from './objects/PredictionMinAggregateInput.schema'
import { PredictionMaxAggregateInputObjectSchema } from './objects/PredictionMaxAggregateInput.schema'

export const PredictionAggregateSchema = z.object({
  orderBy: z
    .union([
      PredictionOrderByWithRelationInputObjectSchema,
      PredictionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PredictionWhereInputObjectSchema.optional(),
  cursor: PredictionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PredictionCountAggregateInputObjectSchema])
    .optional(),
  _min: PredictionMinAggregateInputObjectSchema.optional(),
  _max: PredictionMaxAggregateInputObjectSchema.optional(),
})
