import { z } from "zod"

import { DreamBoothTrainingUpdateManyMutationInputObjectSchema } from "./objects/DreamBoothTrainingUpdateManyMutationInput.schema"
import { DreamBoothTrainingWhereInputObjectSchema } from "./objects/DreamBoothTrainingWhereInput.schema"

export const DreamBoothTrainingUpdateManySchema = z.object({
  data: DreamBoothTrainingUpdateManyMutationInputObjectSchema,
  where: DreamBoothTrainingWhereInputObjectSchema.optional(),
})
