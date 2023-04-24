import { z } from 'zod'
import { PageTextCreateManyInputObjectSchema } from './objects/PageTextCreateManyInput.schema'

export const PageTextCreateManySchema = z.object({
  data: z.union([
    PageTextCreateManyInputObjectSchema,
    z.array(PageTextCreateManyInputObjectSchema),
  ]),
})
