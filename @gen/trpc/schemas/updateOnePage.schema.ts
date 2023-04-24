import { z } from 'zod'
import { PageIncludeObjectSchema } from './objects/PageInclude.schema'
import { PageUpdateInputObjectSchema } from './objects/PageUpdateInput.schema'
import { PageUncheckedUpdateInputObjectSchema } from './objects/PageUncheckedUpdateInput.schema'
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema'

export const PageUpdateOneSchema = z.object({
  include: PageIncludeObjectSchema.optional(),
  data: z.union([
    PageUpdateInputObjectSchema,
    PageUncheckedUpdateInputObjectSchema,
  ]),
  where: PageWhereUniqueInputObjectSchema,
})
