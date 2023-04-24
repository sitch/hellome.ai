import { z } from 'zod'
import { PredictionUpdateInputObjectSchema } from './objects/PredictionUpdateInput.schema'
import { PredictionUncheckedUpdateInputObjectSchema } from './objects/PredictionUncheckedUpdateInput.schema'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'

export const PredictionUpdateOneSchema = z.object({
  data: z.union([
    PredictionUpdateInputObjectSchema,
    PredictionUncheckedUpdateInputObjectSchema,
  ]),
  where: PredictionWhereUniqueInputObjectSchema,
})