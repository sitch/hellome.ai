import { z } from 'zod'
import { EditionUpdateManyMutationInputObjectSchema } from './objects/EditionUpdateManyMutationInput.schema'
import { EditionWhereInputObjectSchema } from './objects/EditionWhereInput.schema'

export const EditionUpdateManySchema = z.object({
  data: EditionUpdateManyMutationInputObjectSchema,
  where: EditionWhereInputObjectSchema.optional(),
})
