import { z } from 'zod'
import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoCreateInputObjectSchema } from './objects/PhotoCreateInput.schema'
import { PhotoUncheckedCreateInputObjectSchema } from './objects/PhotoUncheckedCreateInput.schema'

export const PhotoCreateOneSchema = z.object({
  include: PhotoIncludeObjectSchema.optional(),
  data: z.union([
    PhotoCreateInputObjectSchema,
    PhotoUncheckedCreateInputObjectSchema,
  ]),
})
