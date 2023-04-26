import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoSelectObjectSchema } from './objects/PhotoSelect.schema'
import { PhotoUncheckedUpdateInputObjectSchema } from './objects/PhotoUncheckedUpdateInput.schema'
import { PhotoUpdateInputObjectSchema } from './objects/PhotoUpdateInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './objects/PhotoWhereUniqueInput.schema'
import { z } from 'zod'

export const PhotoUpdateOneSchema = z.object({
  select: PhotoSelectObjectSchema.optional(),
  include: PhotoIncludeObjectSchema.optional(),
  data: z.union([
    PhotoUpdateInputObjectSchema,
    PhotoUncheckedUpdateInputObjectSchema,
  ]),
  where: PhotoWhereUniqueInputObjectSchema,
})
