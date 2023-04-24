import { z } from 'zod'
import { PredictionCreateInputObjectSchema } from './objects/PredictionCreateInput.schema'
import { PredictionUncheckedCreateInputObjectSchema } from './objects/PredictionUncheckedCreateInput.schema'

export const PredictionCreateOneSchema = z.object({
  data: z.union([
    PredictionCreateInputObjectSchema,
    PredictionUncheckedCreateInputObjectSchema,
  ]),
})
