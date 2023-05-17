import { z } from "zod"

import { DreamBoothTrainingAvgAggregateInputObjectSchema } from "./objects/DreamBoothTrainingAvgAggregateInput.schema"
import { DreamBoothTrainingCountAggregateInputObjectSchema } from "./objects/DreamBoothTrainingCountAggregateInput.schema"
import { DreamBoothTrainingMaxAggregateInputObjectSchema } from "./objects/DreamBoothTrainingMaxAggregateInput.schema"
import { DreamBoothTrainingMinAggregateInputObjectSchema } from "./objects/DreamBoothTrainingMinAggregateInput.schema"
import { DreamBoothTrainingOrderByWithRelationInputObjectSchema } from "./objects/DreamBoothTrainingOrderByWithRelationInput.schema"
import { DreamBoothTrainingSumAggregateInputObjectSchema } from "./objects/DreamBoothTrainingSumAggregateInput.schema"
import { DreamBoothTrainingWhereInputObjectSchema } from "./objects/DreamBoothTrainingWhereInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./objects/DreamBoothTrainingWhereUniqueInput.schema"

export const DreamBoothTrainingAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), DreamBoothTrainingCountAggregateInputObjectSchema])
    .optional(),
  _min: DreamBoothTrainingMinAggregateInputObjectSchema.optional(),
  _max: DreamBoothTrainingMaxAggregateInputObjectSchema.optional(),
  _avg: DreamBoothTrainingAvgAggregateInputObjectSchema.optional(),
  _sum: DreamBoothTrainingSumAggregateInputObjectSchema.optional(),
})
