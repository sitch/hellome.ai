import { z } from 'zod'
import { PredictionCreateManyInputObjectSchema } from './objects/PredictionCreateManyInput.schema'

export const PredictionCreateManySchema = z.object({
  data: z.union([
    PredictionCreateManyInputObjectSchema,
    z.array(PredictionCreateManyInputObjectSchema),
  ]),
})
