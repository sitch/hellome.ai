import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'
import { z } from 'zod'

export const ConceptFindUniqueSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  where: ConceptWhereUniqueInputObjectSchema,
})
