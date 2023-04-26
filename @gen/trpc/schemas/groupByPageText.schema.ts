import { PageTextScalarFieldEnumSchema } from './enums/PageTextScalarFieldEnum.schema'
import { PageTextOrderByWithAggregationInputObjectSchema } from './objects/PageTextOrderByWithAggregationInput.schema'
import { PageTextScalarWhereWithAggregatesInputObjectSchema } from './objects/PageTextScalarWhereWithAggregatesInput.schema'
import { PageTextWhereInputObjectSchema } from './objects/PageTextWhereInput.schema'
import { z } from 'zod'

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
