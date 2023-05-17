import { z } from "zod"

import { PredictionScalarFieldEnumSchema } from "./enums/PredictionScalarFieldEnum.schema"
import { PredictionOrderByWithAggregationInputObjectSchema } from "./objects/PredictionOrderByWithAggregationInput.schema"
import { PredictionScalarWhereWithAggregatesInputObjectSchema } from "./objects/PredictionScalarWhereWithAggregatesInput.schema"
import { PredictionWhereInputObjectSchema } from "./objects/PredictionWhereInput.schema"

export const PredictionGroupBySchema = z.object({
  where: PredictionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PredictionOrderByWithAggregationInputObjectSchema,
      PredictionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PredictionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PredictionScalarFieldEnumSchema),
})
