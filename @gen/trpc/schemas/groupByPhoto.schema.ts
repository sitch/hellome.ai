import { PhotoScalarFieldEnumSchema } from './enums/PhotoScalarFieldEnum.schema'
import { PhotoOrderByWithAggregationInputObjectSchema } from './objects/PhotoOrderByWithAggregationInput.schema'
import { PhotoScalarWhereWithAggregatesInputObjectSchema } from './objects/PhotoScalarWhereWithAggregatesInput.schema'
import { PhotoWhereInputObjectSchema } from './objects/PhotoWhereInput.schema'
import { z } from 'zod'

export const PhotoGroupBySchema = z.object({
  where: PhotoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PhotoOrderByWithAggregationInputObjectSchema,
      PhotoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PhotoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PhotoScalarFieldEnumSchema),
})
