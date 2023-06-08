/* eslint-disable */
import { z } from "zod"

import { DreamBoothTrainingScalarFieldEnumSchema } from "./enums/DreamBoothTrainingScalarFieldEnum.schema"
import { DreamBoothTrainingAvgAggregateInputObjectSchema } from "./objects/DreamBoothTrainingAvgAggregateInput.schema"
import { DreamBoothTrainingCountAggregateInputObjectSchema } from "./objects/DreamBoothTrainingCountAggregateInput.schema"
import { DreamBoothTrainingCreateInputObjectSchema } from "./objects/DreamBoothTrainingCreateInput.schema"
import { DreamBoothTrainingCreateManyInputObjectSchema } from "./objects/DreamBoothTrainingCreateManyInput.schema"
import { DreamBoothTrainingIncludeObjectSchema } from "./objects/DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingMaxAggregateInputObjectSchema } from "./objects/DreamBoothTrainingMaxAggregateInput.schema"
import { DreamBoothTrainingMinAggregateInputObjectSchema } from "./objects/DreamBoothTrainingMinAggregateInput.schema"
import { DreamBoothTrainingOrderByWithAggregationInputObjectSchema } from "./objects/DreamBoothTrainingOrderByWithAggregationInput.schema"
import { DreamBoothTrainingOrderByWithRelationInputObjectSchema } from "./objects/DreamBoothTrainingOrderByWithRelationInput.schema"
import { DreamBoothTrainingScalarWhereWithAggregatesInputObjectSchema } from "./objects/DreamBoothTrainingScalarWhereWithAggregatesInput.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./objects/DreamBoothTrainingSelect.schema"
import { DreamBoothTrainingSumAggregateInputObjectSchema } from "./objects/DreamBoothTrainingSumAggregateInput.schema"
import { DreamBoothTrainingUpdateInputObjectSchema } from "./objects/DreamBoothTrainingUpdateInput.schema"
import { DreamBoothTrainingUpdateManyMutationInputObjectSchema } from "./objects/DreamBoothTrainingUpdateManyMutationInput.schema"
import { DreamBoothTrainingWhereInputObjectSchema } from "./objects/DreamBoothTrainingWhereInput.schema"
import { DreamBoothTrainingWhereUniqueInputObjectSchema } from "./objects/DreamBoothTrainingWhereUniqueInput.schema"

export const DreamBoothTrainingSchema = {
  findUnique: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    where: DreamBoothTrainingWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    where: DreamBoothTrainingWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        DreamBoothTrainingOrderByWithRelationInputObjectSchema,
        DreamBoothTrainingOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: DreamBoothTrainingWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(DreamBoothTrainingScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    where: DreamBoothTrainingWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        DreamBoothTrainingOrderByWithRelationInputObjectSchema,
        DreamBoothTrainingOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: DreamBoothTrainingWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(DreamBoothTrainingScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    data: DreamBoothTrainingCreateInputObjectSchema,
  }),
  createMany: z.object({ data: DreamBoothTrainingCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    where: DreamBoothTrainingWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({
    where: DreamBoothTrainingWhereInputObjectSchema.optional(),
  }),
  update: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    data: DreamBoothTrainingUpdateInputObjectSchema,
    where: DreamBoothTrainingWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: DreamBoothTrainingUpdateManyMutationInputObjectSchema,
    where: DreamBoothTrainingWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema.optional()),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema.optional()),
    where: DreamBoothTrainingWhereUniqueInputObjectSchema,
    create: DreamBoothTrainingCreateInputObjectSchema,
    update: DreamBoothTrainingUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: DreamBoothTrainingWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        DreamBoothTrainingOrderByWithRelationInputObjectSchema,
        DreamBoothTrainingOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: DreamBoothTrainingWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([
        z.literal(true),
        DreamBoothTrainingCountAggregateInputObjectSchema,
      ])
      .optional(),
    _min: DreamBoothTrainingMinAggregateInputObjectSchema.optional(),
    _max: DreamBoothTrainingMaxAggregateInputObjectSchema.optional(),
    _avg: DreamBoothTrainingAvgAggregateInputObjectSchema.optional(),
    _sum: DreamBoothTrainingSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
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
    _count: z
      .union([
        z.literal(true),
        DreamBoothTrainingCountAggregateInputObjectSchema,
      ])
      .optional(),
    _min: DreamBoothTrainingMinAggregateInputObjectSchema.optional(),
    _max: DreamBoothTrainingMaxAggregateInputObjectSchema.optional(),
    _avg: DreamBoothTrainingAvgAggregateInputObjectSchema.optional(),
    _sum: DreamBoothTrainingSumAggregateInputObjectSchema.optional(),
  }),
}
