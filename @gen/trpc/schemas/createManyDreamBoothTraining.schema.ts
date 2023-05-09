import { z } from "zod"

import { DreamBoothTrainingCreateManyInputObjectSchema } from "./objects/DreamBoothTrainingCreateManyInput.schema"

export const DreamBoothTrainingCreateManySchema = z.object({
  data: z.union([
    DreamBoothTrainingCreateManyInputObjectSchema,
    z.array(DreamBoothTrainingCreateManyInputObjectSchema),
  ]),
})
