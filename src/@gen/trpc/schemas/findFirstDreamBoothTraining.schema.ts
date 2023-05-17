import { z } from "zod"

import { DreamBoothTrainingScalarFieldEnumSchema } from "./enums/DreamBoothTrainingScalarFieldEnum.schema"
import { DreamBoothTrainingIncludeObjectSchema } from "./objects/DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingOrderByWithRelationInputObjectSchema } from "./objects/DreamBoothTrainingOrderByWithRelationInput.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./objects/DreamBoothTrainingSelect.schema"
import { DreamBoothTrainingWhereInputObjectSchema } from "./objects/DreamBoothTrainingWhereInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./objects/DreamBoothTrainingWhereUniqueInput.schema"

export const DreamBoothTrainingFindFirstSchema = z.object({
  select: DreamBoothTrainingSelectObjectSchema.optional(),
  include: DreamBoothTrainingIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      DreamBoothTrainingOrderByWithRelationInputObjectSchema,
      DreamBoothTrainingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DreamBoothTrainingWhereInputObjectSchema.optional(),
  cursor: DreamBoothTrainingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DreamBoothTrainingScalarFieldEnumSchema).optional(),
})
