import { UserUpdateManyMutationInputObjectSchema } from './objects/UserUpdateManyMutationInput.schema'
import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema'
import { z } from 'zod'

export const UserUpdateManySchema = z.object({
  data: UserUpdateManyMutationInputObjectSchema,
  where: UserWhereInputObjectSchema.optional(),
})
