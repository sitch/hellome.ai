import { PageIncludeObjectSchema } from './objects/PageInclude.schema'
import { PageSelectObjectSchema } from './objects/PageSelect.schema'
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema'
import { z } from 'zod'

export const PageDeleteOneSchema = z.object({
  select: PageSelectObjectSchema.optional(),
  include: PageIncludeObjectSchema.optional(),
  where: PageWhereUniqueInputObjectSchema,
})
