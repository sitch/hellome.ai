import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema'
import { UserIncludeObjectSchema } from './objects/UserInclude.schema'
import { UserSelectObjectSchema } from './objects/UserSelect.schema'
import { UserUncheckedCreateInputObjectSchema } from './objects/UserUncheckedCreateInput.schema'
import { UserUncheckedUpdateInputObjectSchema } from './objects/UserUncheckedUpdateInput.schema'
import { UserUpdateInputObjectSchema } from './objects/UserUpdateInput.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'
import { z } from 'zod'

export const UserUpsertSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  include: UserIncludeObjectSchema.optional(),
  where: UserWhereUniqueInputObjectSchema,
  create: z.union([
    UserCreateInputObjectSchema,
    UserUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UserUpdateInputObjectSchema,
    UserUncheckedUpdateInputObjectSchema,
  ]),
})
