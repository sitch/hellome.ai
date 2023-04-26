import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorSelectObjectSchema } from './objects/AuthorSelect.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'
import { z } from 'zod'

export const AuthorDeleteOneSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  where: AuthorWhereUniqueInputObjectSchema,
})
