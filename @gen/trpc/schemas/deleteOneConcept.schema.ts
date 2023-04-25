import { z } from 'zod'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'

export const ConceptDeleteOneSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  where: ConceptWhereUniqueInputObjectSchema,
})
