import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'
import { z } from 'zod'

export const ArtistDeleteOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  where: ArtistWhereUniqueInputObjectSchema,
})
