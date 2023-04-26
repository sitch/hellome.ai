import { PredictionUpdateManyMutationInputObjectSchema } from './objects/PredictionUpdateManyMutationInput.schema'
import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'
import { z } from 'zod'

export const PredictionUpdateManySchema = z.object({
  data: PredictionUpdateManyMutationInputObjectSchema,
  where: PredictionWhereInputObjectSchema.optional(),
})
