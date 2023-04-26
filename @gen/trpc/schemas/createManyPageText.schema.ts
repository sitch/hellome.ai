import { PageTextCreateManyInputObjectSchema } from './objects/PageTextCreateManyInput.schema'
import { z } from 'zod'

export const PageTextCreateManySchema = z.object({
  data: z.union([
    PageTextCreateManyInputObjectSchema,
    z.array(PageTextCreateManyInputObjectSchema),
  ]),
})
