import { z } from 'zod'
import { CloudFileOrderByWithRelationInputObjectSchema } from './objects/CloudFileOrderByWithRelationInput.schema'
import { CloudFileWhereInputObjectSchema } from './objects/CloudFileWhereInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './objects/CloudFileWhereUniqueInput.schema'
import { CloudFileCountAggregateInputObjectSchema } from './objects/CloudFileCountAggregateInput.schema'
import { CloudFileMinAggregateInputObjectSchema } from './objects/CloudFileMinAggregateInput.schema'
import { CloudFileMaxAggregateInputObjectSchema } from './objects/CloudFileMaxAggregateInput.schema'
import { CloudFileAvgAggregateInputObjectSchema } from './objects/CloudFileAvgAggregateInput.schema'
import { CloudFileSumAggregateInputObjectSchema } from './objects/CloudFileSumAggregateInput.schema'

export const CloudFileAggregateSchema = z.object({
  orderBy: z
    .union([
      CloudFileOrderByWithRelationInputObjectSchema,
      CloudFileOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CloudFileWhereInputObjectSchema.optional(),
  cursor: CloudFileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CloudFileCountAggregateInputObjectSchema])
    .optional(),
  _min: CloudFileMinAggregateInputObjectSchema.optional(),
  _max: CloudFileMaxAggregateInputObjectSchema.optional(),
  _avg: CloudFileAvgAggregateInputObjectSchema.optional(),
  _sum: CloudFileSumAggregateInputObjectSchema.optional(),
})