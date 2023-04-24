import { z } from 'zod'
import { PageArtworkWhereInputObjectSchema } from './objects/PageArtworkWhereInput.schema'
import { PageArtworkOrderByWithAggregationInputObjectSchema } from './objects/PageArtworkOrderByWithAggregationInput.schema'
import { PageArtworkScalarWhereWithAggregatesInputObjectSchema } from './objects/PageArtworkScalarWhereWithAggregatesInput.schema'
import { PageArtworkScalarFieldEnumSchema } from './enums/PageArtworkScalarFieldEnum.schema'

export const PageArtworkGroupBySchema = z.object({
  where: PageArtworkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PageArtworkOrderByWithAggregationInputObjectSchema,
      PageArtworkOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PageArtworkScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PageArtworkScalarFieldEnumSchema),
})
