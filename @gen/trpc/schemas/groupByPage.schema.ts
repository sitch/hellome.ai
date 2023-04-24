import { z } from 'zod'
import { PageWhereInputObjectSchema } from './objects/PageWhereInput.schema'
import { PageOrderByWithAggregationInputObjectSchema } from './objects/PageOrderByWithAggregationInput.schema'
import { PageScalarWhereWithAggregatesInputObjectSchema } from './objects/PageScalarWhereWithAggregatesInput.schema'
import { PageScalarFieldEnumSchema } from './enums/PageScalarFieldEnum.schema'

export const PageGroupBySchema = z.object({
  where: PageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PageOrderByWithAggregationInputObjectSchema,
      PageOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PageScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PageScalarFieldEnumSchema),
})
