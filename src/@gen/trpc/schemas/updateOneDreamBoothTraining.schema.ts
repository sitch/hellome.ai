import { z } from "zod"

import { DreamBoothTrainingIncludeObjectSchema } from "./objects/DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./objects/DreamBoothTrainingSelect.schema"
import { DreamBoothTrainingUncheckedUpdateInputObjectSchema } from "./objects/DreamBoothTrainingUncheckedUpdateInput.schema"
import { DreamBoothTrainingUpdateInputObjectSchema } from "./objects/DreamBoothTrainingUpdateInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./objects/DreamBoothTrainingWhereUniqueInput.schema"

export const DreamBoothTrainingUpdateOneSchema = z.object({
  select: DreamBoothTrainingSelectObjectSchema.optional(),
  include: DreamBoothTrainingIncludeObjectSchema.optional(),
  data: z.union([
    DreamBoothTrainingUpdateInputObjectSchema,
    DreamBoothTrainingUncheckedUpdateInputObjectSchema,
  ]),
  where: DreamBoothTrainingWhereUniqueInputObjectSchema,
})
