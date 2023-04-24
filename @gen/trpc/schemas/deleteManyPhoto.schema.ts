import { z } from 'zod'
import { PhotoWhereInputObjectSchema } from './objects/PhotoWhereInput.schema'

export const PhotoDeleteManySchema = z.object({
  where: PhotoWhereInputObjectSchema.optional(),
})
