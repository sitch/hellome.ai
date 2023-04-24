import { z } from 'zod'
import { PageIncludeObjectSchema } from './objects/PageInclude.schema'
import { PageCreateInputObjectSchema } from './objects/PageCreateInput.schema'
import { PageUncheckedCreateInputObjectSchema } from './objects/PageUncheckedCreateInput.schema'

export const PageCreateOneSchema = z.object({
  include: PageIncludeObjectSchema.optional(),
  data: z.union([
    PageCreateInputObjectSchema,
    PageUncheckedCreateInputObjectSchema,
  ]),
})
