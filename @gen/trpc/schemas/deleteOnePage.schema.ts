import { z } from 'zod'
import { PageSelectObjectSchema } from './objects/PageSelect.schema'
import { PageIncludeObjectSchema } from './objects/PageInclude.schema'
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema'

export const PageDeleteOneSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  where: PageWhereUniqueInputObjectSchema,
})
