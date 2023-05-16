import { z } from "zod"

import { PredictionSelectObjectSchema } from "./objects/PredictionSelect.schema"
import { PredictionUncheckedUpdateInputObjectSchema } from "./objects/PredictionUncheckedUpdateInput.schema"
import { PredictionUpdateInputObjectSchema } from "./objects/PredictionUpdateInput.schema"
import { PredictionWhereUniqueInputObjectSchema } from "./objects/PredictionWhereUniqueInput.schema"

export const PredictionUpdateOneSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
  data: z.union([
    PredictionUpdateInputObjectSchema,
    PredictionUncheckedUpdateInputObjectSchema,
  ]),
  where: PredictionWhereUniqueInputObjectSchema,
})
