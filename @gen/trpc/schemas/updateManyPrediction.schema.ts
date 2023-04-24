import { z } from 'zod'
import { PredictionUpdateManyMutationInputObjectSchema } from './objects/PredictionUpdateManyMutationInput.schema'
import { PredictionWhereInputObjectSchema } from './objects/PredictionWhereInput.schema'

export const PredictionUpdateManySchema = z.object({
  data: PredictionUpdateManyMutationInputObjectSchema,
  where: PredictionWhereInputObjectSchema.optional(),
})
