import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionSelectObjectSchema } from './objects/EditionSelect.schema'
import { EditionWhereUniqueInputObjectSchema } from './objects/EditionWhereUniqueInput.schema'
import { z } from 'zod'

export const EditionDeleteOneSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  where: EditionWhereUniqueInputObjectSchema,
})
