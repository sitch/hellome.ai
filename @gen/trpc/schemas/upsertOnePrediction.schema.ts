import { z } from 'zod'
import { PredictionWhereUniqueInputObjectSchema } from './objects/PredictionWhereUniqueInput.schema'
import { PredictionCreateInputObjectSchema } from './objects/PredictionCreateInput.schema'
import { PredictionUncheckedCreateInputObjectSchema } from './objects/PredictionUncheckedCreateInput.schema'
import { PredictionUpdateInputObjectSchema } from './objects/PredictionUpdateInput.schema'
import { PredictionUncheckedUpdateInputObjectSchema } from './objects/PredictionUncheckedUpdateInput.schema'

export const PredictionUpsertSchema = z.object({
  where: PredictionWhereUniqueInputObjectSchema,
  create: z.union([
    PredictionCreateInputObjectSchema,
    PredictionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PredictionUpdateInputObjectSchema,
    PredictionUncheckedUpdateInputObjectSchema,
  ]),
})
