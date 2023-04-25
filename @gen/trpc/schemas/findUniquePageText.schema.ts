import { z } from 'zod'
import { PageTextSelectObjectSchema } from './objects/PageTextSelect.schema'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'

export const PageTextFindUniqueSchema = z.object({
  select: PageTextSelectObjectSchema.optional(),
  include: PageTextIncludeObjectSchema.optional(),
  where: PageTextWhereUniqueInputObjectSchema,
})
