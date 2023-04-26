import { ConceptUpdateManyMutationInputObjectSchema } from './objects/ConceptUpdateManyMutationInput.schema'
import { ConceptWhereInputObjectSchema } from './objects/ConceptWhereInput.schema'
import { z } from 'zod'

export const ConceptUpdateManySchema = z.object({
  data: ConceptUpdateManyMutationInputObjectSchema,
  where: ConceptWhereInputObjectSchema.optional(),
})
