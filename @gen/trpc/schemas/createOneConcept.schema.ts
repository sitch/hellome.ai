import { z } from 'zod'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptCreateInputObjectSchema } from './objects/ConceptCreateInput.schema'
import { ConceptUncheckedCreateInputObjectSchema } from './objects/ConceptUncheckedCreateInput.schema'

export const ConceptCreateOneSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  data: z.union([
    ConceptCreateInputObjectSchema,
    ConceptUncheckedCreateInputObjectSchema,
  ]),
})
