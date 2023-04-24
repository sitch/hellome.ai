import { z } from 'zod'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptUpdateInputObjectSchema } from './objects/ConceptUpdateInput.schema'
import { ConceptUncheckedUpdateInputObjectSchema } from './objects/ConceptUncheckedUpdateInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'

export const ConceptUpdateOneSchema = z.object({
  include: ConceptIncludeObjectSchema.optional(),
  data: z.union([
    ConceptUpdateInputObjectSchema,
    ConceptUncheckedUpdateInputObjectSchema,
  ]),
  where: ConceptWhereUniqueInputObjectSchema,
})
