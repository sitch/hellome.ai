import { z } from 'zod'
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema'
import { ArtistUncheckedUpdateInputObjectSchema } from './objects/ArtistUncheckedUpdateInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'

export const ArtistUpdateOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  data: z.union([
    ArtistUpdateInputObjectSchema,
    ArtistUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistWhereUniqueInputObjectSchema,
})
