import { z } from 'zod'
import { AuthorSelectObjectSchema } from './objects/AuthorSelect.schema'
import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema'
import { AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'

export const AuthorUpdateOneSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  data: z.union([
    AuthorUpdateInputObjectSchema,
    AuthorUncheckedUpdateInputObjectSchema,
  ]),
  where: AuthorWhereUniqueInputObjectSchema,
})
