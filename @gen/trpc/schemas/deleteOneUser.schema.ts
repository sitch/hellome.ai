import { z } from 'zod'
import { UserIncludeObjectSchema } from './objects/UserInclude.schema'
import { UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema'

export const UserDeleteOneSchema = z.object({
  include: UserIncludeObjectSchema.optional(),
  where: UserWhereUniqueInputObjectSchema,
})
