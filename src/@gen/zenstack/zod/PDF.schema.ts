/* eslint-disable */
import { z } from "zod"

import { PDFScalarFieldEnumSchema } from "./enums/PDFScalarFieldEnum.schema"
import { PDFAvgAggregateInputObjectSchema } from "./objects/PDFAvgAggregateInput.schema"
import { PDFCountAggregateInputObjectSchema } from "./objects/PDFCountAggregateInput.schema"
import { PDFCreateInputObjectSchema } from "./objects/PDFCreateInput.schema"
import { PDFCreateManyInputObjectSchema } from "./objects/PDFCreateManyInput.schema"
import { PDFIncludeObjectSchema } from "./objects/PDFInclude.schema"
import { PDFMaxAggregateInputObjectSchema } from "./objects/PDFMaxAggregateInput.schema"
import { PDFMinAggregateInputObjectSchema } from "./objects/PDFMinAggregateInput.schema"
import { PDFOrderByWithAggregationInputObjectSchema } from "./objects/PDFOrderByWithAggregationInput.schema"
import { PDFOrderByWithRelationInputObjectSchema } from "./objects/PDFOrderByWithRelationInput.schema"
import { PDFScalarWhereWithAggregatesInputObjectSchema } from "./objects/PDFScalarWhereWithAggregatesInput.schema"
import { PDFSelectObjectSchema } from "./objects/PDFSelect.schema"
import { PDFSumAggregateInputObjectSchema } from "./objects/PDFSumAggregateInput.schema"
import { PDFUpdateInputObjectSchema } from "./objects/PDFUpdateInput.schema"
import { PDFUpdateManyMutationInputObjectSchema } from "./objects/PDFUpdateManyMutationInput.schema"
import { PDFWhereInputObjectSchema } from "./objects/PDFWhereInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./objects/PDFWhereUniqueInput.schema"

export const PDFSchema = {
  findUnique: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    where: PDFWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    where: PDFWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PDFOrderByWithRelationInputObjectSchema,
        PDFOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PDFWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PDFScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    where: PDFWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PDFOrderByWithRelationInputObjectSchema,
        PDFOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PDFWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PDFScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    data: PDFCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PDFCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    where: PDFWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PDFWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    data: PDFUpdateInputObjectSchema,
    where: PDFWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PDFUpdateManyMutationInputObjectSchema,
    where: PDFWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => PDFSelectObjectSchema.optional()),
    include: z.lazy(() => PDFIncludeObjectSchema.optional()),
    where: PDFWhereUniqueInputObjectSchema,
    create: PDFCreateInputObjectSchema,
    update: PDFUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PDFWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PDFOrderByWithRelationInputObjectSchema,
        PDFOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PDFWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PDFCountAggregateInputObjectSchema])
      .optional(),
    _min: PDFMinAggregateInputObjectSchema.optional(),
    _max: PDFMaxAggregateInputObjectSchema.optional(),
    _avg: PDFAvgAggregateInputObjectSchema.optional(),
    _sum: PDFSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PDFWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PDFOrderByWithAggregationInputObjectSchema,
        PDFOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: PDFScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PDFScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), PDFCountAggregateInputObjectSchema])
      .optional(),
    _min: PDFMinAggregateInputObjectSchema.optional(),
    _max: PDFMaxAggregateInputObjectSchema.optional(),
    _avg: PDFAvgAggregateInputObjectSchema.optional(),
    _sum: PDFSumAggregateInputObjectSchema.optional(),
  }),
}
