import { z } from 'zod'
import { PhotoSelectObjectSchema } from './objects/PhotoSelect.schema'
import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoUpdateInputObjectSchema } from './objects/PhotoUpdateInput.schema'
import { PhotoUncheckedUpdateInputObjectSchema } from './objects/PhotoUncheckedUpdateInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './objects/PhotoWhereUniqueInput.schema'

export const PhotoUpdateOneSchema = z.object({
  select: PhotoSelectObjectSchema.optional(),
  include: PhotoIncludeObjectSchema.optional(),
  data: z.union([
    PhotoUpdateInputObjectSchema,
    PhotoUncheckedUpdateInputObjectSchema,
  ]),
  where: PhotoWhereUniqueInputObjectSchema,
})
