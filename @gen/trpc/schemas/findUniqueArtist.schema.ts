import { z } from 'zod'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'

export const ArtistFindUniqueSchema = z.object({
  include: ArtistIncludeObjectSchema.optional(),
  where: ArtistWhereUniqueInputObjectSchema,
})
