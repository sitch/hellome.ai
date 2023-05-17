import { z } from "zod"

import { PredictionCreateInputObjectSchema } from "./objects/PredictionCreateInput.schema"
import { PredictionSelectObjectSchema } from "./objects/PredictionSelect.schema"
import { PredictionUncheckedCreateInputObjectSchema } from "./objects/PredictionUncheckedCreateInput.schema"
import { PredictionUncheckedUpdateInputObjectSchema } from "./objects/PredictionUncheckedUpdateInput.schema"
import { PredictionUpdateInputObjectSchema } from "./objects/PredictionUpdateInput.schema"
import { PredictionWhereUniqueInputObjectSchema } from "./objects/PredictionWhereUniqueInput.schema"

export const PredictionUpsertSchema = z.object({
  select: PredictionSelectObjectSchema.optional(),
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
