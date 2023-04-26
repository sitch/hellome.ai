import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'
import { z } from 'zod'

export const PageTextFindUniqueSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  where: PageTextWhereUniqueInputObjectSchema,
})
