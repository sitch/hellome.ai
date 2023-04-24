import { z } from 'zod'
import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoWhereUniqueInputObjectSchema } from './objects/PhotoWhereUniqueInput.schema'
import { PhotoCreateInputObjectSchema } from './objects/PhotoCreateInput.schema'
import { PhotoUncheckedCreateInputObjectSchema } from './objects/PhotoUncheckedCreateInput.schema'
import { PhotoUpdateInputObjectSchema } from './objects/PhotoUpdateInput.schema'
import { PhotoUncheckedUpdateInputObjectSchema } from './objects/PhotoUncheckedUpdateInput.schema'

export const PhotoUpsertSchema = z.object({
  include: PhotoIncludeObjectSchema.optional(),
  where: PhotoWhereUniqueInputObjectSchema,
  create: z.union([
    PhotoCreateInputObjectSchema,
    PhotoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PhotoUpdateInputObjectSchema,
    PhotoUncheckedUpdateInputObjectSchema,
  ]),
})
