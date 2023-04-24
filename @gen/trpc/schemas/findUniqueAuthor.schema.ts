import { z } from 'zod'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'

export const AuthorFindUniqueSchema = z.object({
  include: AuthorIncludeObjectSchema.optional(),
  where: AuthorWhereUniqueInputObjectSchema,
})
