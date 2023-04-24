import { z } from 'zod'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'

export const ArtistDeleteManySchema = z.object({
  where: ArtistWhereInputObjectSchema.optional(),
})
