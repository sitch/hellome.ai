import { z } from 'zod'
import { EditionSelectObjectSchema } from './objects/EditionSelect.schema'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionCreateInputObjectSchema } from './objects/EditionCreateInput.schema'
import { EditionUncheckedCreateInputObjectSchema } from './objects/EditionUncheckedCreateInput.schema'

export const EditionCreateOneSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  data: z.union([
    EditionCreateInputObjectSchema,
    EditionUncheckedCreateInputObjectSchema,
  ]),
})
