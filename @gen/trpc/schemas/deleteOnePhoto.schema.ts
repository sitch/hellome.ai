import { z } from 'zod'
import { PhotoIncludeObjectSchema } from './objects/PhotoInclude.schema'
import { PhotoWhereUniqueInputObjectSchema } from './objects/PhotoWhereUniqueInput.schema'

export const PhotoDeleteOneSchema = z.object({
  include: PhotoIncludeObjectSchema.optional(),
  where: PhotoWhereUniqueInputObjectSchema,
})
