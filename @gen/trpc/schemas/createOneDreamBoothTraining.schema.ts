import { z } from "zod"

import { DreamBoothTrainingCreateInputObjectSchema } from "./objects/DreamBoothTrainingCreateInput.schema"
import { DreamBoothTrainingIncludeObjectSchema } from "./objects/DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./objects/DreamBoothTrainingSelect.schema"
import { DreamBoothTrainingUncheckedCreateInputObjectSchema } from "./objects/DreamBoothTrainingUncheckedCreateInput.schema"

export const DreamBoothTrainingCreateOneSchema = z.object({
  select: DreamBoothTrainingSelectObjectSchema.optional(),
  include: DreamBoothTrainingIncludeObjectSchema.optional(),
  data: z.union([
    DreamBoothTrainingCreateInputObjectSchema,
    DreamBoothTrainingUncheckedCreateInputObjectSchema,
  ]),
})
