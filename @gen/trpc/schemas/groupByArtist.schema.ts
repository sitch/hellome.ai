import { ArtistScalarFieldEnumSchema } from './enums/ArtistScalarFieldEnum.schema'
import { ArtistOrderByWithAggregationInputObjectSchema } from './objects/ArtistOrderByWithAggregationInput.schema'
import { ArtistScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtistScalarWhereWithAggregatesInput.schema'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'
import { z } from 'zod'

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
