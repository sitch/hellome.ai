import { z } from 'zod'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionWhereUniqueInputObjectSchema } from './objects/EditionWhereUniqueInput.schema'

export const EditionFindUniqueSchema = z.object({
  include: EditionIncludeObjectSchema.optional(),
  where: EditionWhereUniqueInputObjectSchema,
})
