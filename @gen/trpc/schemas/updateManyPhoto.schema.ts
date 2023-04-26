import { PhotoUpdateManyMutationInputObjectSchema } from './objects/PhotoUpdateManyMutationInput.schema'
import { PhotoWhereInputObjectSchema } from './objects/PhotoWhereInput.schema'
import { z } from 'zod'

export const PhotoUpdateManySchema = z.object({
  data: PhotoUpdateManyMutationInputObjectSchema,
  where: PhotoWhereInputObjectSchema.optional(),
})
