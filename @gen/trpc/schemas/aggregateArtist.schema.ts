import { z } from 'zod'
import { ArtistOrderByWithRelationInputObjectSchema } from './objects/ArtistOrderByWithRelationInput.schema'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'
import { ArtistCountAggregateInputObjectSchema } from './objects/ArtistCountAggregateInput.schema'
import { ArtistMinAggregateInputObjectSchema } from './objects/ArtistMinAggregateInput.schema'
import { ArtistMaxAggregateInputObjectSchema } from './objects/ArtistMaxAggregateInput.schema'

export const ArtistAggregateSchema = z.object({
  orderBy: z
    .union([
      ArtistOrderByWithRelationInputObjectSchema,
      ArtistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistWhereInputObjectSchema.optional(),
  cursor: ArtistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArtistCountAggregateInputObjectSchema])
    .optional(),
  _min: ArtistMinAggregateInputObjectSchema.optional(),
  _max: ArtistMaxAggregateInputObjectSchema.optional(),
})
