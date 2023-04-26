import { AuthorUpdateManyMutationInputObjectSchema } from './objects/AuthorUpdateManyMutationInput.schema'
import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema'
import { z } from 'zod'

export const AuthorUpdateManySchema = z.object({
  data: AuthorUpdateManyMutationInputObjectSchema,
  where: AuthorWhereInputObjectSchema.optional(),
})
