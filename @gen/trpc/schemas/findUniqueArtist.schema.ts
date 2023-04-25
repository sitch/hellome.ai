import { z } from 'zod'
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'

export const ArtistFindUniqueSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  where: ArtistWhereUniqueInputObjectSchema,
})
