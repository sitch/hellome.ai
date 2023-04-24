import { z } from 'zod'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'

export const PredictionDeleteOneSchema = z.object({
  where: PredictionWhereUniqueInputObjectSchema,
})
