import { EditionCreateManyInputObjectSchema } from './objects/EditionCreateManyInput.schema'
import { z } from 'zod'

export const EditionCreateManySchema = z.object({
  data: z.union([
    EditionCreateManyInputObjectSchema,
    z.array(EditionCreateManyInputObjectSchema),
  ]),
})
