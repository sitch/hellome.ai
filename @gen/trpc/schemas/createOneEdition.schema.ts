import { EditionCreateInputObjectSchema } from './objects/EditionCreateInput.schema'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionSelectObjectSchema } from './objects/EditionSelect.schema'
import { EditionUncheckedCreateInputObjectSchema } from './objects/EditionUncheckedCreateInput.schema'
import { z } from 'zod'

export const EditionCreateOneSchema = z.object({
  select: EditionSelectObjectSchema.optional(),
  include: EditionIncludeObjectSchema.optional(),
  data: z.union([
    EditionCreateInputObjectSchema,
    EditionUncheckedCreateInputObjectSchema,
  ]),
})
