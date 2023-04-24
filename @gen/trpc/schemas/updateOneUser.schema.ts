import { z } from 'zod'
import { UserIncludeObjectSchema } from './objects/UserInclude.schema'
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema'
import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'

export const UserUpdateOneSchema = z.object({
  include: UserIncludeObjectSchema.optional(),
  data: z.union([
    UserUpdateInputObjectSchema,
    UserUncheckedUpdateInputObjectSchema,
  ]),
  where: UserWhereUniqueInputObjectSchema,
})
