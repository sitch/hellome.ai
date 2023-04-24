import { z } from 'zod'
import { ConceptWhereInputObjectSchema } from './objects/ConceptWhereInput.schema'

export const ConceptDeleteManySchema = z.object({
  where: ConceptWhereInputObjectSchema.optional(),
})
