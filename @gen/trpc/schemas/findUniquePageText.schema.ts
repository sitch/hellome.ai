import { z } from 'zod'
import { PageTextIncludeObjectSchema } from './objects/PageTextInclude.schema'
import { PageTextWhereUniqueInputObjectSchema } from './objects/PageTextWhereUniqueInput.schema'

export const PageTextFindUniqueSchema = z.object({
  include: PageTextIncludeObjectSchema.optional(),
  where: PageTextWhereUniqueInputObjectSchema,
})
