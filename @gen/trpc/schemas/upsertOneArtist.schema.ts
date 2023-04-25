import { z } from 'zod'
import { ArtistSelectObjectSchema } from './objects/ArtistSelect.schema'
import { ArtistIncludeObjectSchema } from './objects/ArtistInclude.schema'
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema'
import { ArtistCreateInputObjectSchema } from './objects/ArtistCreateInput.schema'
import { ArtistUncheckedCreateInputObjectSchema } from './objects/ArtistUncheckedCreateInput.schema'
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema'
import { ArtistUncheckedUpdateInputObjectSchema } from './objects/ArtistUncheckedUpdateInput.schema'

export const ArtistUpsertSchema = z.object({
  select: ArtistSelectObjectSchema.optional(),
  include: ArtistIncludeObjectSchema.optional(),
  where: ArtistWhereUniqueInputObjectSchema,
  create: z.union([
    ArtistCreateInputObjectSchema,
    ArtistUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ArtistUpdateInputObjectSchema,
    ArtistUncheckedUpdateInputObjectSchema,
  ]),
})
