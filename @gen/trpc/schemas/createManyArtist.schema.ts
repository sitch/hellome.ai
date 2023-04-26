import { ArtistCreateManyInputObjectSchema } from './objects/ArtistCreateManyInput.schema'
import { z } from 'zod'

export const ArtistCreateManySchema = z.object({
  data: z.union([
    ArtistCreateManyInputObjectSchema,
    z.array(ArtistCreateManyInputObjectSchema),
  ]),
})
