import { z } from 'zod'
import { AuthorSelectObjectSchema } from './objects/AuthorSelect.schema'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'

export const AuthorFindUniqueSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  where: AuthorWhereUniqueInputObjectSchema,
})
