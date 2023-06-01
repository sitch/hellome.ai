/* eslint-disable */
import { z } from "zod"

import { PageScalarFieldEnumSchema } from "./enums/PageScalarFieldEnum.schema"
import { PageAvgAggregateInputObjectSchema } from "./objects/PageAvgAggregateInput.schema"
import { PageCountAggregateInputObjectSchema } from "./objects/PageCountAggregateInput.schema"
import { PageCreateInputObjectSchema } from "./objects/PageCreateInput.schema"
import { PageCreateManyInputObjectSchema } from "./objects/PageCreateManyInput.schema"
import { PageIncludeObjectSchema } from "./objects/PageInclude.schema"
import { PageMaxAggregateInputObjectSchema } from "./objects/PageMaxAggregateInput.schema"
import { PageMinAggregateInputObjectSchema } from "./objects/PageMinAggregateInput.schema"
import { PageOrderByWithAggregationInputObjectSchema } from "./objects/PageOrderByWithAggregationInput.schema"
import { PageOrderByWithRelationInputObjectSchema } from "./objects/PageOrderByWithRelationInput.schema"
import { PageScalarWhereWithAggregatesInputObjectSchema } from "./objects/PageScalarWhereWithAggregatesInput.schema"
import { PageSelectObjectSchema } from "./objects/PageSelect.schema"
import { PageSumAggregateInputObjectSchema } from "./objects/PageSumAggregateInput.schema"
import { PageUpdateInputObjectSchema } from "./objects/PageUpdateInput.schema"
import { PageUpdateManyMutationInputObjectSchema } from "./objects/PageUpdateManyMutationInput.schema"
import { PageWhereInputObjectSchema } from "./objects/PageWhereInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./objects/PageWhereUniqueInput.schema"

export const PageSchema = {
  findUnique: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    where: PageWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    where: PageWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageOrderByWithRelationInputObjectSchema,
        PageOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PageScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    where: PageWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageOrderByWithRelationInputObjectSchema,
        PageOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PageScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    data: PageCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PageCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    where: PageWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PageWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    data: PageUpdateInputObjectSchema,
    where: PageWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PageUpdateManyMutationInputObjectSchema,
    where: PageWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => PageSelectObjectSchema.optional()),
    include: z.lazy(() => PageIncludeObjectSchema.optional()),
    where: PageWhereUniqueInputObjectSchema,
    create: PageCreateInputObjectSchema,
    update: PageUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PageWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageOrderByWithRelationInputObjectSchema,
        PageOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PageCountAggregateInputObjectSchema])
      .optional(),
    _min: PageMinAggregateInputObjectSchema.optional(),
    _max: PageMaxAggregateInputObjectSchema.optional(),
    _avg: PageAvgAggregateInputObjectSchema.optional(),
    _sum: PageSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PageWhereInputObjectSchema.optional(),
    orderBy: z.union([
      PageOrderByWithAggregationInputObjectSchema,
      PageOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: PageScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PageScalarFieldEnumSchema),
  }),
}
