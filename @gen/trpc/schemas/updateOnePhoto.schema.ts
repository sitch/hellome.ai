import { z } from 'zod'
import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoUpdateInputObjectSchema } from './objects/PhotoUpdateInput.schema'
import { PhotoUncheckedUpdateInputObjectSchema } from './objects/PhotoUncheckedUpdateInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './objects/PhotoWhereUniqueInput.schema'

export const PhotoUpdateOneSchema = z.object({
  include: PhotoIncludeObjectSchema.optional(),
  data: z.union([
    PhotoUpdateInputObjectSchema,
    PhotoUncheckedUpdateInputObjectSchema,
  ]),
  where: PhotoWhereUniqueInputObjectSchema,
})
