import { z } from 'zod'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextCreateInputObjectSchema } from './objects/PageTextCreateInput.schema'
import { PageTextUncheckedCreateInputObjectSchema } from './objects/PageTextUncheckedCreateInput.schema'

export const PageTextCreateOneSchema = z.object({
  include: PageTextIncludeObjectSchema.optional(),
  data: z.union([
    PageTextCreateInputObjectSchema,
    PageTextUncheckedCreateInputObjectSchema,
  ]),
})
