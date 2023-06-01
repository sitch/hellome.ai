/* eslint-disable */
import { z } from "zod"

import { PredictionScalarFieldEnumSchema } from "./enums/PredictionScalarFieldEnum.schema"
import { PredictionCountAggregateInputObjectSchema } from "./objects/PredictionCountAggregateInput.schema"
import { PredictionCreateInputObjectSchema } from "./objects/PredictionCreateInput.schema"
import { PredictionCreateManyInputObjectSchema } from "./objects/PredictionCreateManyInput.schema"
import { PredictionMaxAggregateInputObjectSchema } from "./objects/PredictionMaxAggregateInput.schema"
import { PredictionMinAggregateInputObjectSchema } from "./objects/PredictionMinAggregateInput.schema"
import { PredictionOrderByWithAggregationInputObjectSchema } from "./objects/PredictionOrderByWithAggregationInput.schema"
import { PredictionOrderByWithRelationInputObjectSchema } from "./objects/PredictionOrderByWithRelationInput.schema"
import { PredictionScalarWhereWithAggregatesInputObjectSchema } from "./objects/PredictionScalarWhereWithAggregatesInput.schema"
import { PredictionSelectObjectSchema } from "./objects/PredictionSelect.schema"
import { PredictionUpdateInputObjectSchema } from "./objects/PredictionUpdateInput.schema"
import { PredictionUpdateManyMutationInputObjectSchema } from "./objects/PredictionUpdateManyMutationInput.schema"
import { PredictionWhereInputObjectSchema } from "./objects/PredictionWhereInput.schema"
import { PredictionWhereUniqueInputObjectSchema } from "./objects/PredictionWhereUniqueInput.schema"

export const PredictionSchema = {
  findUnique: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    where: PredictionWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    where: PredictionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PredictionOrderByWithRelationInputObjectSchema,
        PredictionOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PredictionWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PredictionScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    where: PredictionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PredictionOrderByWithRelationInputObjectSchema,
        PredictionOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PredictionWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PredictionScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    data: PredictionCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PredictionCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    where: PredictionWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PredictionWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    data: PredictionUpdateInputObjectSchema,
    where: PredictionWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PredictionUpdateManyMutationInputObjectSchema,
    where: PredictionWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => PredictionSelectObjectSchema.optional()),
    where: PredictionWhereUniqueInputObjectSchema,
    create: PredictionCreateInputObjectSchema,
    update: PredictionUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PredictionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PredictionOrderByWithRelationInputObjectSchema,
        PredictionOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PredictionWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PredictionCountAggregateInputObjectSchema])
      .optional(),
    _min: PredictionMinAggregateInputObjectSchema.optional(),
    _max: PredictionMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PredictionWhereInputObjectSchema.optional(),
    orderBy: z.union([
      PredictionOrderByWithAggregationInputObjectSchema,
      PredictionOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: PredictionScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PredictionScalarFieldEnumSchema),
  }),
}
