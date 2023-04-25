import { z } from 'zod'
import { EditionSelectObjectSchema } from './objects/EditionSelect.schema'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionWhereUniqueInputObjectSchema } from './objects/EditionWhereUniqueInput.schema'

export const EditionFindUniqueSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  where: EditionWhereUniqueInputObjectSchema,
})
