import { UserCreateManyInputObjectSchema } from './objects/UserCreateManyInput.schema'
import { z } from 'zod'

export const UserCreateManySchema = z.object({
  data: z.union([
    UserCreateManyInputObjectSchema,
    z.array(UserCreateManyInputObjectSchema),
  ]),
})
