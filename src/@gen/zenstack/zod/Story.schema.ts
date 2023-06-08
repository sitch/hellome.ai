/* eslint-disable */
import { z } from "zod"

import { StoryScalarFieldEnumSchema } from "./enums/StoryScalarFieldEnum.schema"
import { StoryCountAggregateInputObjectSchema } from "./objects/StoryCountAggregateInput.schema"
import { StoryCreateInputObjectSchema } from "./objects/StoryCreateInput.schema"
import { StoryCreateManyInputObjectSchema } from "./objects/StoryCreateManyInput.schema"
import { StoryIncludeObjectSchema } from "./objects/StoryInclude.schema"
import { StoryMaxAggregateInputObjectSchema } from "./objects/StoryMaxAggregateInput.schema"
import { StoryMinAggregateInputObjectSchema } from "./objects/StoryMinAggregateInput.schema"
import { StoryOrderByWithAggregationInputObjectSchema } from "./objects/StoryOrderByWithAggregationInput.schema"
import { StoryOrderByWithRelationInputObjectSchema } from "./objects/StoryOrderByWithRelationInput.schema"
import { StoryScalarWhereWithAggregatesInputObjectSchema } from "./objects/StoryScalarWhereWithAggregatesInput.schema"
import { StorySelectObjectSchema } from "./objects/StorySelect.schema"
import { StoryUpdateInputObjectSchema } from "./objects/StoryUpdateInput.schema"
import { StoryUpdateManyMutationInputObjectSchema } from "./objects/StoryUpdateManyMutationInput.schema"
import { StoryWhereInputObjectSchema } from "./objects/StoryWhereInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./objects/StoryWhereUniqueInput.schema"

export const StorySchema = {
  findUnique: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    where: StoryWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    where: StoryWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        StoryOrderByWithRelationInputObjectSchema,
        StoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: StoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(StoryScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    where: StoryWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        StoryOrderByWithRelationInputObjectSchema,
        StoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: StoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(StoryScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    data: StoryCreateInputObjectSchema,
  }),
  createMany: z.object({ data: StoryCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    where: StoryWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: StoryWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    data: StoryUpdateInputObjectSchema,
    where: StoryWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: StoryUpdateManyMutationInputObjectSchema,
    where: StoryWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => StorySelectObjectSchema.optional()),
    include: z.lazy(() => StoryIncludeObjectSchema.optional()),
    where: StoryWhereUniqueInputObjectSchema,
    create: StoryCreateInputObjectSchema,
    update: StoryUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: StoryWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        StoryOrderByWithRelationInputObjectSchema,
        StoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: StoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), StoryCountAggregateInputObjectSchema])
      .optional(),
    _min: StoryMinAggregateInputObjectSchema.optional(),
    _max: StoryMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: StoryWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        StoryOrderByWithAggregationInputObjectSchema,
        StoryOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: StoryScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(StoryScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), StoryCountAggregateInputObjectSchema])
      .optional(),
    _min: StoryMinAggregateInputObjectSchema.optional(),
    _max: StoryMaxAggregateInputObjectSchema.optional(),
  }),
}
