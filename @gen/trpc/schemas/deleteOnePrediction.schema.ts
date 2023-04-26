import { PredictionSelectObjectSchema } from './objects/PredictionSelect.schema'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'
import { z } from 'zod'

export const PredictionDeleteOneSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
  where: PredictionWhereUniqueInputObjectSchema,
})
