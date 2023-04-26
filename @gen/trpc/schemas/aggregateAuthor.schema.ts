import { AuthorCountAggregateInputObjectSchema } from './objects/AuthorCountAggregateInput.schema'
import { AuthorMaxAggregateInputObjectSchema } from './objects/AuthorMaxAggregateInput.schema'
import { AuthorMinAggregateInputObjectSchema } from './objects/AuthorMinAggregateInput.schema'
import { AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema'
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'
import { z } from 'zod'

export const AuthorAggregateSchema = z.object({
  orderBy: z
    .union([
      AuthorOrderByWithRelationInputObjectSchema,
      AuthorOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AuthorWhereInputObjectSchema.optional(),
  cursor: AuthorWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AuthorCountAggregateInputObjectSchema])
    .optional(),
  _min: AuthorMinAggregateInputObjectSchema.optional(),
  _max: AuthorMaxAggregateInputObjectSchema.optional(),
})
