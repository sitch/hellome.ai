import { EditionUpdateManyMutationInputObjectSchema } from './objects/EditionUpdateManyMutationInput.schema'
import { EditionWhereInputObjectSchema } from './objects/EditionWhereInput.schema'
import { z } from 'zod'

export const EditionUpdateManySchema = z.object({
  data: EditionUpdateManyMutationInputObjectSchema,
  where: EditionWhereInputObjectSchema.optional(),
})
