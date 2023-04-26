import { AuthorCreateManyInputObjectSchema } from './objects/AuthorCreateManyInput.schema'
import { z } from 'zod'

export const AuthorCreateManySchema = z.object({
  data: z.union([
    AuthorCreateManyInputObjectSchema,
    z.array(AuthorCreateManyInputObjectSchema),
  ]),
})
