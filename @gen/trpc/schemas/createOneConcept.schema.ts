import { z } from 'zod'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptCreateInputObjectSchema } from './objects/ConceptCreateInput.schema'
import { ConceptUncheckedCreateInputObjectSchema } from './objects/ConceptUncheckedCreateInput.schema'

export const ConceptCreateOneSchema = z.object({
  include: ConceptIncludeObjectSchema.optional(),
  data: z.union([
    ConceptCreateInputObjectSchema,
    ConceptUncheckedCreateInputObjectSchema,
  ]),
})
