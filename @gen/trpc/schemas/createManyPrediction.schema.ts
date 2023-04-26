import { PredictionCreateManyInputObjectSchema } from './objects/PredictionCreateManyInput.schema'
import { z } from 'zod'

export const PredictionCreateManySchema = z.object({
  data: z.union([
    PredictionCreateManyInputObjectSchema,
    z.array(PredictionCreateManyInputObjectSchema),
  ]),
})
