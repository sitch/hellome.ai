import { z } from 'zod'
import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'
import { PageTextOrderByWithAggregationInputObjectSchema } from './objects/PageTextOrderByWithAggregationInput.schema'
import { PageTextScalarWhereWithAggregatesInputObjectSchema } from './objects/PageTextScalarWhereWithAggregatesInput.schema'
import { PageTextScalarFieldEnumSchema } from './enums/PageTextScalarFieldEnum.schema'

export const PageTextGroupBySchema = z.object({
  where: PageTextWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PageTextOrderByWithAggregationInputObjectSchema,
      PageTextOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PageTextScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PageTextScalarFieldEnumSchema),
})
