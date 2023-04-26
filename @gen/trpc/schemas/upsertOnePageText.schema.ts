import { PageTextCreateInputObjectSchema } from './objects/PageTextCreateInput.schema'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextUncheckedCreateInputObjectSchema } from './objects/PageTextUncheckedCreateInput.schema'
import { PageTextUncheckedUpdateInputObjectSchema } from './objects/PageTextUncheckedUpdateInput.schema'
import { PageTextUpdateInputObjectSchema } from './objects/PageTextUpdateInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'
import { z } from 'zod'

export const PageTextUpsertSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  where: PageTextWhereUniqueInputObjectSchema,
  create: z.union([
    PageTextCreateInputObjectSchema,
    PageTextUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PageTextUpdateInputObjectSchema,
    PageTextUncheckedUpdateInputObjectSchema,
  ]),
})
