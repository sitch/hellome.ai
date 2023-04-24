import { z } from 'zod'
import { PageIncludeObjectSchema } from './objects/PageInclude.schema'
import { PageWhereUniqueInputObjectSchema } from './objects/PageWhereUniqueInput.schema'

export const PageFindUniqueSchema = z.object({
  include: PageIncludeObjectSchema.optional(),
  where: PageWhereUniqueInputObjectSchema,
})
