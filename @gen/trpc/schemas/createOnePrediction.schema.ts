import { z } from 'zod'
import { PredictionSelectObjectSchema } from './objects/PredictionSelect.schema'
import { PredictionCreateInputObjectSchema } from './objects/PredictionCreateInput.schema'
import { PredictionUncheckedCreateInputObjectSchema } from './objects/PredictionUncheckedCreateInput.schema'

export const PredictionCreateOneSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
  data: z.union([
    PredictionCreateInputObjectSchema,
    PredictionUncheckedCreateInputObjectSchema,
  ]),
})
