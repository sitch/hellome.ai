import { z } from 'zod'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema'
import { ArtistUncheckedUpdateInputObjectSchema } from './objects/ArtistUncheckedUpdateInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'

export const ArtistUpdateOneSchema = z.object({
  include: ArtistIncludeObjectSchema.optional(),
  data: z.union([
    ArtistUpdateInputObjectSchema,
    ArtistUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistWhereUniqueInputObjectSchema,
})
