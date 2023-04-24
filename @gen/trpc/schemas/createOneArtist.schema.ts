import { z } from 'zod'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistCreateInputObjectSchema } from './objects/ArtistCreateInput.schema'
import { ArtistUncheckedCreateInputObjectSchema } from './objects/ArtistUncheckedCreateInput.schema'

export const ArtistCreateOneSchema = z.object({
  include: ArtistIncludeObjectSchema.optional(),
  data: z.union([
    ArtistCreateInputObjectSchema,
    ArtistUncheckedCreateInputObjectSchema,
  ]),
})
