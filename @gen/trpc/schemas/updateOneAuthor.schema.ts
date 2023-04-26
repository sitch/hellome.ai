import { AuthorIncludeObjectSchema } from './objects/AuthorInclude.schema'
import { AuthorSelectObjectSchema } from './objects/AuthorSelect.schema'
import { AuthorUncheckedUpdateInputObjectSchema } from './objects/AuthorUncheckedUpdateInput.schema'
import { AuthorUpdateInputObjectSchema } from './objects/AuthorUpdateInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema'
import { z } from 'zod'

export const AuthorUpdateOneSchema = z.object({
  select: AuthorSelectObjectSchema.optional(),
  include: AuthorIncludeObjectSchema.optional(),
  data: z.union([
    AuthorUpdateInputObjectSchema,
    AuthorUncheckedUpdateInputObjectSchema,
  ]),
  where: AuthorWhereUniqueInputObjectSchema,
})
