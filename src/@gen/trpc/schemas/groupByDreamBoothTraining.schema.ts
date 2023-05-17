import { z } from "zod"

import { DreamBoothTrainingScalarFieldEnumSchema } from "./enums/DreamBoothTrainingScalarFieldEnum.schema"
import { DreamBoothTrainingOrderByWithAggregationInputObjectSchema } from "./objects/DreamBoothTrainingOrderByWithAggregationInput.schema"
import { DreamBoothTrainingScalarWhereWithAggregatesInputObjectSchema } from "./objects/DreamBoothTrainingScalarWhereWithAggregatesInput.schema"
import { DreamBoothTrainingWhereInputObjectSchema } from "./objects/DreamBoothTrainingWhereInput.schema"

export const DreamBoothTrainingGroupBySchema = z.object({
  where: DreamBoothTrainingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DreamBoothTrainingOrderByWithAggregationInputObjectSchema,
      DreamBoothTrainingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    DreamBoothTrainingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DreamBoothTrainingScalarFieldEnumSchema),
})
