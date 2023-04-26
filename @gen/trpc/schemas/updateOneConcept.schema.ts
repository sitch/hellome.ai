import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptUncheckedUpdateInputObjectSchema } from './objects/ConceptUncheckedUpdateInput.schema'
import { ConceptUpdateInputObjectSchema } from './objects/ConceptUpdateInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'
import { z } from 'zod'

export const ConceptUpdateOneSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  data: z.union([
    ConceptUpdateInputObjectSchema,
    ConceptUncheckedUpdateInputObjectSchema,
  ]),
  where: ConceptWhereUniqueInputObjectSchema,
})
