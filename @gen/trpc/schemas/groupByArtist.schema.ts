import { z } from 'zod'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'
import { ArtistOrderByWithAggregationInputObjectSchema } from './objects/ArtistOrderByWithAggregationInput.schema'
import { ArtistScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtistScalarWhereWithAggregatesInput.schema'
import { ArtistScalarFieldEnumSchema } from './enums/ArtistScalarFieldEnum.schema'

export const ArtistGroupBySchema = z.object({
  where: ArtistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtistOrderByWithAggregationInputObjectSchema,
      ArtistOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtistScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtistScalarFieldEnumSchema),
})
