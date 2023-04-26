import { ConceptCreateInputObjectSchema } from './objects/ConceptCreateInput.schema'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptUncheckedCreateInputObjectSchema } from './objects/ConceptUncheckedCreateInput.schema'
import { z } from 'zod'

export const ConceptCreateOneSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  data: z.union([
    ConceptCreateInputObjectSchema,
    ConceptUncheckedCreateInputObjectSchema,
  ]),
})
