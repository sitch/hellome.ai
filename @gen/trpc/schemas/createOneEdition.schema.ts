import { z } from 'zod'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionCreateInputObjectSchema } from './objects/EditionCreateInput.schema'
import { EditionUncheckedCreateInputObjectSchema } from './objects/EditionUncheckedCreateInput.schema'

export const EditionCreateOneSchema = z.object({
  include: EditionIncludeObjectSchema.optional(),
  data: z.union([
    EditionCreateInputObjectSchema,
    EditionUncheckedCreateInputObjectSchema,
  ]),
})
