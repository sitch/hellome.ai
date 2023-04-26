import { ConceptWhereInputObjectSchema } from './objects/ConceptWhereInput.schema'
import { z } from 'zod'

export const ConceptDeleteManySchema = z.object({
  where: ConceptWhereInputObjectSchema.optional(),
})
