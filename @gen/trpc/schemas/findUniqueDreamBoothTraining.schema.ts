import { z } from "zod"

import { DreamBoothTrainingIncludeObjectSchema } from "./objects/DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./objects/DreamBoothTrainingSelect.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./objects/DreamBoothTrainingWhereUniqueInput.schema"

export const DreamBoothTrainingFindUniqueSchema = z.object({
  select: DreamBoothTrainingSelectObjectSchema.optional(),
  include: DreamBoothTrainingIncludeObjectSchema.optional(),
  where: DreamBoothTrainingWhereUniqueInputObjectSchema,
})
