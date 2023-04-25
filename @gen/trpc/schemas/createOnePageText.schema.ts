import { z } from 'zod'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextCreateInputObjectSchema } from './objects/PageTextCreateInput.schema'
import { PageTextUncheckedCreateInputObjectSchema } from './objects/PageTextUncheckedCreateInput.schema'

export const PageTextCreateOneSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  data: z.union([
    PageTextCreateInputObjectSchema,
    PageTextUncheckedCreateInputObjectSchema,
  ]),
})
