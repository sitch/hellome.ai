import { PhotoCreateManyInputObjectSchema } from './objects/PhotoCreateManyInput.schema'
import { z } from 'zod'

export const PhotoCreateManySchema = z.object({
  data: z.union([
    PhotoCreateManyInputObjectSchema,
    z.array(PhotoCreateManyInputObjectSchema),
  ]),
})
