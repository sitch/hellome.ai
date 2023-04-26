import { PageTextCreateInputObjectSchema } from './objects/PageTextCreateInput.schema'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextUncheckedCreateInputObjectSchema } from './objects/PageTextUncheckedCreateInput.schema'
import { z } from 'zod'

export const PageTextCreateOneSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  data: z.union([
    PageTextCreateInputObjectSchema,
    PageTextUncheckedCreateInputObjectSchema,
  ]),
})
