import { AuthorScalarFieldEnumSchema } from './enums/AuthorScalarFieldEnum.schema'
import { AuthorOrderByWithAggregationInputObjectSchema } from './objects/AuthorOrderByWithAggregationInput.schema'
import { AuthorScalarWhereWithAggregatesInputObjectSchema } from './objects/AuthorScalarWhereWithAggregatesInput.schema'
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema'
import { z } from 'zod'

export const AuthorGroupBySchema = z.object({
  where: AuthorWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AuthorOrderByWithAggregationInputObjectSchema,
      AuthorOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AuthorScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AuthorScalarFieldEnumSchema),
})
