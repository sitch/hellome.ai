/* eslint-disable */
import { z } from "zod"

import { EditionScalarFieldEnumSchema } from "./enums/EditionScalarFieldEnum.schema"
import { EditionCountAggregateInputObjectSchema } from "./objects/EditionCountAggregateInput.schema"
import { EditionCreateInputObjectSchema } from "./objects/EditionCreateInput.schema"
import { EditionCreateManyInputObjectSchema } from "./objects/EditionCreateManyInput.schema"
import { EditionIncludeObjectSchema } from "./objects/EditionInclude.schema"
import { EditionMaxAggregateInputObjectSchema } from "./objects/EditionMaxAggregateInput.schema"
import { EditionMinAggregateInputObjectSchema } from "./objects/EditionMinAggregateInput.schema"
import { EditionOrderByWithAggregationInputObjectSchema } from "./objects/EditionOrderByWithAggregationInput.schema"
import { EditionOrderByWithRelationInputObjectSchema } from "./objects/EditionOrderByWithRelationInput.schema"
import { EditionScalarWhereWithAggregatesInputObjectSchema } from "./objects/EditionScalarWhereWithAggregatesInput.schema"
import { EditionSelectObjectSchema } from "./objects/EditionSelect.schema"
import { EditionUpdateInputObjectSchema } from "./objects/EditionUpdateInput.schema"
import { EditionUpdateManyMutationInputObjectSchema } from "./objects/EditionUpdateManyMutationInput.schema"
import { EditionWhereInputObjectSchema } from "./objects/EditionWhereInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./objects/EditionWhereUniqueInput.schema"

export const EditionSchema = {
  findUnique: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    where: EditionWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    where: EditionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        EditionOrderByWithRelationInputObjectSchema,
        EditionOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: EditionWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(EditionScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    where: EditionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        EditionOrderByWithRelationInputObjectSchema,
        EditionOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: EditionWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(EditionScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    data: EditionCreateInputObjectSchema,
  }),
  createMany: z.object({ data: EditionCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    where: EditionWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: EditionWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    data: EditionUpdateInputObjectSchema,
    where: EditionWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: EditionUpdateManyMutationInputObjectSchema,
    where: EditionWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => EditionSelectObjectSchema.optional()),
    include: z.lazy(() => EditionIncludeObjectSchema.optional()),
    where: EditionWhereUniqueInputObjectSchema,
    create: EditionCreateInputObjectSchema,
    update: EditionUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: EditionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        EditionOrderByWithRelationInputObjectSchema,
        EditionOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: EditionWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), EditionCountAggregateInputObjectSchema])
      .optional(),
    _min: EditionMinAggregateInputObjectSchema.optional(),
    _max: EditionMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: EditionWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        EditionOrderByWithAggregationInputObjectSchema,
        EditionOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: EditionScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(EditionScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), EditionCountAggregateInputObjectSchema])
      .optional(),
    _min: EditionMinAggregateInputObjectSchema.optional(),
    _max: EditionMaxAggregateInputObjectSchema.optional(),
  }),
}
