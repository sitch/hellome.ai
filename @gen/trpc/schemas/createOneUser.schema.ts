import { z } from 'zod'
import { UserIncludeObjectSchema } from './objects/UserInclude.schema'
import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema'
import { UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema'

export const UserCreateOneSchema = z.object({
  include: UserIncludeObjectSchema.optional(),
  data: z.union([
    UserCreateInputObjectSchema,
    UserUncheckedCreateInputObjectSchema,
  ]),
})
