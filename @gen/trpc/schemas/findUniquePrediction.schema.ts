import { z } from 'zod'
import { PredictionSelectObjectSchema } from './objects/PredictionSelect.schema'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'

export const PredictionFindUniqueSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
  where: PredictionWhereUniqueInputObjectSchema,
})
