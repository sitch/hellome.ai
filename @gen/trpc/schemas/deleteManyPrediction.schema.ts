import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'
import { z } from 'zod'

export const PredictionDeleteManySchema = z.object({
  where: PredictionWhereInputObjectSchema.optional(),
})
