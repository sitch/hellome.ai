/* eslint-disable */
import { z } from "zod"

import { PageTextScalarFieldEnumSchema } from "./enums/PageTextScalarFieldEnum.schema"
import { PageTextCountAggregateInputObjectSchema } from "./objects/PageTextCountAggregateInput.schema"
import { PageTextCreateInputObjectSchema } from "./objects/PageTextCreateInput.schema"
import { PageTextCreateManyInputObjectSchema } from "./objects/PageTextCreateManyInput.schema"
import { PageTextIncludeObjectSchema } from "./objects/PageTextInclude.schema"
import { PageTextMaxAggregateInputObjectSchema } from "./objects/PageTextMaxAggregateInput.schema"
import { PageTextMinAggregateInputObjectSchema } from "./objects/PageTextMinAggregateInput.schema"
import { PageTextOrderByWithAggregationInputObjectSchema } from "./objects/PageTextOrderByWithAggregationInput.schema"
import { PageTextOrderByWithRelationInputObjectSchema } from "./objects/PageTextOrderByWithRelationInput.schema"
import { PageTextScalarWhereWithAggregatesInputObjectSchema } from "./objects/PageTextScalarWhereWithAggregatesInput.schema"
import { PageTextSelectObjectSchema } from "./objects/PageTextSelect.schema"
import { PageTextUpdateInputObjectSchema } from "./objects/PageTextUpdateInput.schema"
import { PageTextUpdateManyMutationInputObjectSchema } from "./objects/PageTextUpdateManyMutationInput.schema"
import { PageTextWhereInputObjectSchema } from "./objects/PageTextWhereInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./objects/PageTextWhereUniqueInput.schema"

export const PageTextSchema = {
  findUnique: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    where: PageTextWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    where: PageTextWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageTextOrderByWithRelationInputObjectSchema,
        PageTextOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageTextWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PageTextScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    where: PageTextWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageTextOrderByWithRelationInputObjectSchema,
        PageTextOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageTextWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PageTextScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    data: PageTextCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PageTextCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    where: PageTextWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PageTextWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    data: PageTextUpdateInputObjectSchema,
    where: PageTextWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PageTextUpdateManyMutationInputObjectSchema,
    where: PageTextWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => PageTextSelectObjectSchema.optional()),
    include: z.lazy(() => PageTextIncludeObjectSchema.optional()),
    where: PageTextWhereUniqueInputObjectSchema,
    create: PageTextCreateInputObjectSchema,
    update: PageTextUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PageTextWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageTextOrderByWithRelationInputObjectSchema,
        PageTextOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageTextWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PageTextCountAggregateInputObjectSchema])
      .optional(),
    _min: PageTextMinAggregateInputObjectSchema.optional(),
    _max: PageTextMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PageTextWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageTextOrderByWithAggregationInputObjectSchema,
        PageTextOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: PageTextScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PageTextScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), PageTextCountAggregateInputObjectSchema])
      .optional(),
    _min: PageTextMinAggregateInputObjectSchema.optional(),
    _max: PageTextMaxAggregateInputObjectSchema.optional(),
  }),
}
