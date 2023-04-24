import { z } from 'zod'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistOrderByWithRelationInputObjectSchema } from './objects/ArtistOrderByWithRelationInput.schema'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'
import { ArtistScalarFieldEnumSchema } from './enums/ArtistScalarFieldEnum.schema'

export const ArtistFindManySchema = z.object({
  include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
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
  distinct: z.array(ArtistScalarFieldEnumSchema).optional(),
})
