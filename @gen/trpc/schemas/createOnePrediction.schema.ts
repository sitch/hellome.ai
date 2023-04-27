import { z } from "zod"

import { PredictionCreateInputObjectSchema } from "./objects/PredictionCreateInput.schema"
import { PredictionSelectObjectSchema } from "./objects/PredictionSelect.schema"
import { PredictionUncheckedCreateInputObjectSchema } from "./objects/PredictionUncheckedCreateInput.schema"

export const PredictionCreateOneSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
  data: z.union([
    PredictionCreateInputObjectSchema,
    PredictionUncheckedCreateInputObjectSchema,
  ]),
})
