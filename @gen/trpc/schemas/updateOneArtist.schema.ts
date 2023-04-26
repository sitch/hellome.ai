import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema'
import { ArtistUncheckedUpdateInputObjectSchema } from './objects/ArtistUncheckedUpdateInput.schema'
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'
import { z } from 'zod'

export const ArtistUpdateOneSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  data: z.union([
    ArtistUpdateInputObjectSchema,
    ArtistUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistWhereUniqueInputObjectSchema,
})
