import { z } from 'zod'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'

export const PredictionFindUniqueSchema = z.object({
  where: PredictionWhereUniqueInputObjectSchema,
})
