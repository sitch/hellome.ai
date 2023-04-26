import { UserWhereInputObjectSchema } from './objects/UserWhereInput.schema'
import { z } from 'zod'

export const UserDeleteManySchema = z.object({
  where: UserWhereInputObjectSchema.optional(),
})
