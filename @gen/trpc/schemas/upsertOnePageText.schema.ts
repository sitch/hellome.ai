import { z } from 'zod'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'
import { PageTextCreateInputObjectSchema } from './objects/PageTextCreateInput.schema'
import { PageTextUncheckedCreateInputObjectSchema } from './objects/PageTextUncheckedCreateInput.schema'
import { PageTextUpdateInputObjectSchema } from './objects/PageTextUpdateInput.schema'
import { PageTextUncheckedUpdateInputObjectSchema } from './objects/PageTextUncheckedUpdateInput.schema'

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
