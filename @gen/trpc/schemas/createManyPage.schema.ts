import { PageCreateManyInputObjectSchema } from './objects/PageCreateManyInput.schema'
import { z } from 'zod'

export const PageCreateManySchema = z.object({
  data: z.union([
    PageCreateManyInputObjectSchema,
    z.array(PageCreateManyInputObjectSchema),
  ]),
})
