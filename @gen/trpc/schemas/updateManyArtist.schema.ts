import { z } from 'zod'
import { ArtistUpdateManyMutationInputObjectSchema } from './objects/ArtistUpdateManyMutationInput.schema'
import { ArtistWhereInputObjectSchema } from './objects/ArtistWhereInput.schema'

export const ArtistUpdateManySchema = z.object({
  data: ArtistUpdateManyMutationInputObjectSchema,
  where: ArtistWhereInputObjectSchema.optional(),
})
