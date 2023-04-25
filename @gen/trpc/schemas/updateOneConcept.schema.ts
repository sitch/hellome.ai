import { z } from 'zod'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptUpdateInputObjectSchema } from './objects/ConceptUpdateInput.schema'
import { ConceptUncheckedUpdateInputObjectSchema } from './objects/ConceptUncheckedUpdateInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'

export const ConceptUpdateOneSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  data: z.union([
    ConceptUpdateInputObjectSchema,
    ConceptUncheckedUpdateInputObjectSchema,
  ]),
  where: ConceptWhereUniqueInputObjectSchema,
})
