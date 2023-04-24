import { z } from 'zod'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'

export const AuthorDeleteOneSchema = z.object({
  include: AuthorIncludeObjectSchema.optional(),
  where: AuthorWhereUniqueInputObjectSchema,
})
