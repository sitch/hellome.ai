import { z } from 'zod'
import { ConceptSelectObjectSchema } from './objects/ConceptSelect.schema'
import { ConceptIncludeObjectSchema } from './objects/ConceptInclude.schema'
import { ConceptWhereUniqueInputObjectSchema } from './objects/ConceptWhereUniqueInput.schema'
import { ConceptCreateInputObjectSchema } from './objects/ConceptCreateInput.schema'
import { ConceptUncheckedCreateInputObjectSchema } from './objects/ConceptUncheckedCreateInput.schema'
import { ConceptUpdateInputObjectSchema } from './objects/ConceptUpdateInput.schema'
import { ConceptUncheckedUpdateInputObjectSchema } from './objects/ConceptUncheckedUpdateInput.schema'

export const ConceptUpsertSchema = z.object({
  select: ConceptSelectObjectSchema.optional(),
  include: ConceptIncludeObjectSchema.optional(),
  where: ConceptWhereUniqueInputObjectSchema,
  create: z.union([
    ConceptCreateInputObjectSchema,
    ConceptUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConceptUpdateInputObjectSchema,
    ConceptUncheckedUpdateInputObjectSchema,
  ]),
})
