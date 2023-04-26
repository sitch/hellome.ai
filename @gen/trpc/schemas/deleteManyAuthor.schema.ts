import { AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema'
import { z } from 'zod'

export const AuthorDeleteManySchema = z.object({
  where: AuthorWhereInputObjectSchema.optional(),
})
