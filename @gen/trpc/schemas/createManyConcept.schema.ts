import { ConceptCreateManyInputObjectSchema } from './objects/ConceptCreateManyInput.schema'
import { z } from 'zod'

export const ConceptCreateManySchema = z.object({
  data: z.union([
    ConceptCreateManyInputObjectSchema,
    z.array(ConceptCreateManyInputObjectSchema),
  ]),
})
