import { UserIncludeObjectSchema } from './objects/UserInclude.schema'
import { UserSelectObjectSchema } from './objects/UserSelect.schema'
import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema'
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'
import { z } from 'zod'

export const UserUpdateOneSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  include: UserIncludeObjectSchema.optional(),
  data: z.union([
    UserUpdateInputObjectSchema,
    UserUncheckedUpdateInputObjectSchema,
  ]),
  where: UserWhereUniqueInputObjectSchema,
})
