import { ArtistUpdateManyMutationInputObjectSchema } from './objects/ArtistUpdateManyMutationInput.schema'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'
import { z } from 'zod'

export const ArtistUpdateManySchema = z.object({
  data: ArtistUpdateManyMutationInputObjectSchema,
  where: ArtistWhereInputObjectSchema.optional(),
})
