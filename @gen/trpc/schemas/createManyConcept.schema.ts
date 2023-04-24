import { z } from 'zod'
import { ConceptCreateManyInputObjectSchema } from './objects/ConceptCreateManyInput.schema'

export const ConceptCreateManySchema = z.object({
  data: z.union([
    ConceptCreateManyInputObjectSchema,
    z.array(ConceptCreateManyInputObjectSchema),
  ]),
})
