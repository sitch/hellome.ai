import { z } from 'zod'
import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'

export const PredictionDeleteManySchema = z.object({
  where: PredictionWhereInputObjectSchema.optional(),
})
