import { z } from "zod"

import { DreamBoothTrainingWhereInputObjectSchema } from "./objects/DreamBoothTrainingWhereInput.schema"

export const DreamBoothTrainingDeleteManySchema = z.object({
  where: DreamBoothTrainingWhereInputObjectSchema.optional(),
})
