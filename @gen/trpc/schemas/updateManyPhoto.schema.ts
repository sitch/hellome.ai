import { z } from 'zod'
import { PhotoUpdateManyMutationInputObjectSchema } from './objects/PhotoUpdateManyMutationInput.schema'
import { PhotoWhereInputObjectSchema } from './objects/PhotoWhereInput.schema'

export const PhotoUpdateManySchema = z.object({
  data: PhotoUpdateManyMutationInputObjectSchema,
  where: PhotoWhereInputObjectSchema.optional(),
})
