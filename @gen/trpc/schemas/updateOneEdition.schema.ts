import { z } from 'zod'
import { EditionIncludeObjectSchema } from './objects/EditionInclude.schema'
import { EditionUpdateInputObjectSchema } from './objects/EditionUpdateInput.schema'
import { EditionUncheckedUpdateInputObjectSchema } from './objects/EditionUncheckedUpdateInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './objects/EditionWhereUniqueInput.schema'

export const EditionUpdateOneSchema = z.object({
  include: EditionIncludeObjectSchema.optional(),
  data: z.union([
    EditionUpdateInputObjectSchema,
    EditionUncheckedUpdateInputObjectSchema,
  ]),
  where: EditionWhereUniqueInputObjectSchema,
})
