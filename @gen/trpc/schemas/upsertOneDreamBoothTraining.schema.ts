import { z } from "zod"

import { DreamBoothTrainingCreateInputObjectSchema } from "./objects/DreamBoothTrainingCreateInput.schema"
import { DreamBoothTrainingIncludeObjectSchema } from "./objects/DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./objects/DreamBoothTrainingSelect.schema"
import { DreamBoothTrainingUncheckedCreateInputObjectSchema } from "./objects/DreamBoothTrainingUncheckedCreateInput.schema"
import { DreamBoothTrainingUncheckedUpdateInputObjectSchema } from "./objects/DreamBoothTrainingUncheckedUpdateInput.schema"
import { DreamBoothTrainingUpdateInputObjectSchema } from "./objects/DreamBoothTrainingUpdateInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./objects/DreamBoothTrainingWhereUniqueInput.schema"

export const DreamBoothTrainingUpsertSchema = z.object({
  select: DreamBoothTrainingSelectObjectSchema.optional(),
  include: DreamBoothTrainingIncludeObjectSchema.optional(),
  where: DreamBoothTrainingWhereUniqueInputObjectSchema,
  create: z.union([
    DreamBoothTrainingCreateInputObjectSchema,
    DreamBoothTrainingUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DreamBoothTrainingUpdateInputObjectSchema,
    DreamBoothTrainingUncheckedUpdateInputObjectSchema,
  ]),
})
