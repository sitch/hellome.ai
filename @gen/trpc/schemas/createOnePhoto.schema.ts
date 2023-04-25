import { z } from 'zod'
import { PhotoSelectObjectSchema } from './objects/PhotoSelect.schema'
import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoCreateInputObjectSchema } from './objects/PhotoCreateInput.schema'
import { PhotoUncheckedCreateInputObjectSchema } from './objects/PhotoUncheckedCreateInput.schema'

export const PhotoCreateOneSchema = z.object({
  select: PhotoSelectObjectSchema.optional(),
  include: PhotoIncludeObjectSchema.optional(),
  data: z.union([
    PhotoCreateInputObjectSchema,
    PhotoUncheckedCreateInputObjectSchema,
  ]),
})
