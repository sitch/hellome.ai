import { StoryCountAggregateInputObjectSchema } from './objects/StoryCountAggregateInput.schema'
import { StoryMaxAggregateInputObjectSchema } from './objects/StoryMaxAggregateInput.schema'
import { StoryMinAggregateInputObjectSchema } from './objects/StoryMinAggregateInput.schema'
import { StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema'
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'
import { z } from 'zod'

export const StoryAggregateSchema = z.object({
  orderBy: z
    .union([
      StoryOrderByWithRelationInputObjectSchema,
      StoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StoryWhereInputObjectSchema.optional(),
  cursor: StoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StoryCountAggregateInputObjectSchema])
    .optional(),
  _min: StoryMinAggregateInputObjectSchema.optional(),
  _max: StoryMaxAggregateInputObjectSchema.optional(),
})
