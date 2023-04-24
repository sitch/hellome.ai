import { z } from 'zod'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema'
import { AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'

export const AuthorUpdateOneSchema = z.object({
  include: AuthorIncludeObjectSchema.optional(),
  data: z.union([
    AuthorUpdateInputObjectSchema,
    AuthorUncheckedUpdateInputObjectSchema,
  ]),
  where: AuthorWhereUniqueInputObjectSchema,
})
