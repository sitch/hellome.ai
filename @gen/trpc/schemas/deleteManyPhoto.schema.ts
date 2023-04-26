import { PhotoWhereInputObjectSchema } from './objects/PhotoWhereInput.schema'
import { z } from 'zod'

export const PhotoDeleteManySchema = z.object({
  where: PhotoWhereInputObjectSchema.optional(),
})
