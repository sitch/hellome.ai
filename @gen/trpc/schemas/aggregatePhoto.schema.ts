import { PhotoAvgAggregateInputObjectSchema } from './objects/PhotoAvgAggregateInput.schema'
import { PhotoCountAggregateInputObjectSchema } from './objects/PhotoCountAggregateInput.schema'
import { PhotoMaxAggregateInputObjectSchema } from './objects/PhotoMaxAggregateInput.schema'
import { PhotoMinAggregateInputObjectSchema } from './objects/PhotoMinAggregateInput.schema'
import { PhotoOrderByWithRelationInputObjectSchema } from './objects/PhotoOrderByWithRelationInput.schema'
import { PhotoSumAggregateInputObjectSchema } from './objects/PhotoSumAggregateInput.schema'
import { PhotoWhereInputObjectSchema } from './objects/PhotoWhereInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './objects/PhotoWhereUniqueInput.schema'
import { z } from 'zod'

export const PhotoAggregateSchema = z.object({
  orderBy: z
    .union([
      PhotoOrderByWithRelationInputObjectSchema,
      PhotoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PhotoWhereInputObjectSchema.optional(),
  cursor: PhotoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PhotoCountAggregateInputObjectSchema])
    .optional(),
  _min: PhotoMinAggregateInputObjectSchema.optional(),
  _max: PhotoMaxAggregateInputObjectSchema.optional(),
  _avg: PhotoAvgAggregateInputObjectSchema.optional(),
  _sum: PhotoSumAggregateInputObjectSchema.optional(),
})
