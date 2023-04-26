import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'
import { z } from 'zod'

export const ArtistDeleteManySchema = z.object({
  where: ArtistWhereInputObjectSchema.optional(),
})
