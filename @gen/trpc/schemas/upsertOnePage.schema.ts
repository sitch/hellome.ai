import { z } from 'zod'
import { PageSelectObjectSchema } from './objects/PageSelect.schema'
import { PageIncludeObjectSchema } from './objects/PageInclude.schema'
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema'
import { PageCreateInputObjectSchema } from './objects/PageCreateInput.schema'
import { PageUncheckedCreateInputObjectSchema } from './objects/PageUncheckedCreateInput.schema'
import { PageUpdateInputObjectSchema } from './objects/PageUpdateInput.schema'
import { PageUncheckedUpdateInputObjectSchema } from './objects/PageUncheckedUpdateInput.schema'

export const PageUpsertSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  where: PageWhereUniqueInputObjectSchema,
  create: z.union([
    PageCreateInputObjectSchema,
    PageUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PageUpdateInputObjectSchema,
    PageUncheckedUpdateInputObjectSchema,
  ]),
})
