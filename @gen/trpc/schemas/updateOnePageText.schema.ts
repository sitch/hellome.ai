import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextUncheckedUpdateInputObjectSchema } from './objects/PageTextUncheckedUpdateInput.schema'
import { PageTextUpdateInputObjectSchema } from './objects/PageTextUpdateInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'
import { z } from 'zod'

export const PageTextUpdateOneSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  data: z.union([
    PageTextUpdateInputObjectSchema,
    PageTextUncheckedUpdateInputObjectSchema,
  ]),
  where: PageTextWhereUniqueInputObjectSchema,
})
