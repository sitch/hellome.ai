import { z } from 'zod'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'

export const ConceptDeleteOneSchema = z.object({
  include: ConceptIncludeObjectSchema.optional(),
  where: ConceptWhereUniqueInputObjectSchema,
})
