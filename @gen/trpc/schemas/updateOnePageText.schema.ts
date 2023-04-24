import { z } from 'zod'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextUpdateInputObjectSchema } from './objects/PageTextUpdateInput.schema'
import { PageTextUncheckedUpdateInputObjectSchema } from './objects/PageTextUncheckedUpdateInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'

export const PageTextUpdateOneSchema = z.object({
  include: PageTextIncludeObjectSchema.optional(),
  data: z.union([
    PageTextUpdateInputObjectSchema,
    PageTextUncheckedUpdateInputObjectSchema,
  ]),
  where: PageTextWhereUniqueInputObjectSchema,
})
