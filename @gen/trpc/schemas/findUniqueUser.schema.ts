import { UserIncludeObjectSchema } from './objects/UserInclude.schema'
import { UserSelectObjectSchema } from './objects/UserSelect.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'
import { z } from 'zod'

export const UserFindUniqueSchema = z.object({
  select: UserSelectObjectSchema.optional(),
  include: UserIncludeObjectSchema.optional(),
  where: UserWhereUniqueInputObjectSchema,
})
