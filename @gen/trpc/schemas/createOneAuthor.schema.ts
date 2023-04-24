import { z } from 'zod'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorCreateInputObjectSchema } from './objects/AuthorCreateInput.schema'
import { AuthorUncheckedCreateInputObjectSchema } from './objects/AuthorUncheckedCreateInput.schema'

export const AuthorCreateOneSchema = z.object({
  include: AuthorIncludeObjectSchema.optional(),
  data: z.union([
    AuthorCreateInputObjectSchema,
    AuthorUncheckedCreateInputObjectSchema,
  ]),
})
