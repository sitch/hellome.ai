/* eslint-disable */
import { z } from "zod"

import { PageArtworkScalarFieldEnumSchema } from "./enums/PageArtworkScalarFieldEnum.schema"
import { PageArtworkCountAggregateInputObjectSchema } from "./objects/PageArtworkCountAggregateInput.schema"
import { PageArtworkCreateInputObjectSchema } from "./objects/PageArtworkCreateInput.schema"
import { PageArtworkCreateManyInputObjectSchema } from "./objects/PageArtworkCreateManyInput.schema"
import { PageArtworkIncludeObjectSchema } from "./objects/PageArtworkInclude.schema"
import { PageArtworkMaxAggregateInputObjectSchema } from "./objects/PageArtworkMaxAggregateInput.schema"
import { PageArtworkMinAggregateInputObjectSchema } from "./objects/PageArtworkMinAggregateInput.schema"
import { PageArtworkOrderByWithAggregationInputObjectSchema } from "./objects/PageArtworkOrderByWithAggregationInput.schema"
import { PageArtworkOrderByWithRelationInputObjectSchema } from "./objects/PageArtworkOrderByWithRelationInput.schema"
import { PageArtworkScalarWhereWithAggregatesInputObjectSchema } from "./objects/PageArtworkScalarWhereWithAggregatesInput.schema"
import { PageArtworkSelectObjectSchema } from "./objects/PageArtworkSelect.schema"
import { PageArtworkUpdateInputObjectSchema } from "./objects/PageArtworkUpdateInput.schema"
import { PageArtworkUpdateManyMutationInputObjectSchema } from "./objects/PageArtworkUpdateManyMutationInput.schema"
import { PageArtworkWhereInputObjectSchema } from "./objects/PageArtworkWhereInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./objects/PageArtworkWhereUniqueInput.schema"

export const PageArtworkSchema = {
  findUnique: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    where: PageArtworkWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    where: PageArtworkWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageArtworkOrderByWithRelationInputObjectSchema,
        PageArtworkOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageArtworkWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PageArtworkScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    where: PageArtworkWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageArtworkOrderByWithRelationInputObjectSchema,
        PageArtworkOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageArtworkWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PageArtworkScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    data: PageArtworkCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PageArtworkCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    where: PageArtworkWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PageArtworkWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    data: PageArtworkUpdateInputObjectSchema,
    where: PageArtworkWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PageArtworkUpdateManyMutationInputObjectSchema,
    where: PageArtworkWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => PageArtworkSelectObjectSchema.optional()),
    include: z.lazy(() => PageArtworkIncludeObjectSchema.optional()),
    where: PageArtworkWhereUniqueInputObjectSchema,
    create: PageArtworkCreateInputObjectSchema,
    update: PageArtworkUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PageArtworkWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageArtworkOrderByWithRelationInputObjectSchema,
        PageArtworkOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PageArtworkWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PageArtworkCountAggregateInputObjectSchema])
      .optional(),
    _min: PageArtworkMinAggregateInputObjectSchema.optional(),
    _max: PageArtworkMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PageArtworkWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PageArtworkOrderByWithAggregationInputObjectSchema,
        PageArtworkOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: PageArtworkScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PageArtworkScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), PageArtworkCountAggregateInputObjectSchema])
      .optional(),
    _min: PageArtworkMinAggregateInputObjectSchema.optional(),
    _max: PageArtworkMaxAggregateInputObjectSchema.optional(),
  }),
}
