/* eslint-disable */
import { z } from "zod"

import { ConceptScalarFieldEnumSchema } from "./enums/ConceptScalarFieldEnum.schema"
import { ConceptCountAggregateInputObjectSchema } from "./objects/ConceptCountAggregateInput.schema"
import { ConceptCreateInputObjectSchema } from "./objects/ConceptCreateInput.schema"
import { ConceptCreateManyInputObjectSchema } from "./objects/ConceptCreateManyInput.schema"
import { ConceptIncludeObjectSchema } from "./objects/ConceptInclude.schema"
import { ConceptMaxAggregateInputObjectSchema } from "./objects/ConceptMaxAggregateInput.schema"
import { ConceptMinAggregateInputObjectSchema } from "./objects/ConceptMinAggregateInput.schema"
import { ConceptOrderByWithAggregationInputObjectSchema } from "./objects/ConceptOrderByWithAggregationInput.schema"
import { ConceptOrderByWithRelationInputObjectSchema } from "./objects/ConceptOrderByWithRelationInput.schema"
import { ConceptScalarWhereWithAggregatesInputObjectSchema } from "./objects/ConceptScalarWhereWithAggregatesInput.schema"
import { ConceptSelectObjectSchema } from "./objects/ConceptSelect.schema"
import { ConceptUpdateInputObjectSchema } from "./objects/ConceptUpdateInput.schema"
import { ConceptUpdateManyMutationInputObjectSchema } from "./objects/ConceptUpdateManyMutationInput.schema"
import { ConceptWhereInputObjectSchema } from "./objects/ConceptWhereInput.schema"
import { ConceptWhereUniqueInputObjectSchema } from "./objects/ConceptWhereUniqueInput.schema"

export const ConceptSchema = {
  findUnique: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    where: ConceptWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    where: ConceptWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ConceptOrderByWithRelationInputObjectSchema,
        ConceptOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ConceptWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ConceptScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    where: ConceptWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ConceptOrderByWithRelationInputObjectSchema,
        ConceptOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ConceptWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ConceptScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    data: ConceptCreateInputObjectSchema,
  }),
  createMany: z.object({ data: ConceptCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    where: ConceptWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: ConceptWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    data: ConceptUpdateInputObjectSchema,
    where: ConceptWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: ConceptUpdateManyMutationInputObjectSchema,
    where: ConceptWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => ConceptSelectObjectSchema.optional()),
    include: z.lazy(() => ConceptIncludeObjectSchema.optional()),
    where: ConceptWhereUniqueInputObjectSchema,
    create: ConceptCreateInputObjectSchema,
    update: ConceptUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: ConceptWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ConceptOrderByWithRelationInputObjectSchema,
        ConceptOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ConceptWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), ConceptCountAggregateInputObjectSchema])
      .optional(),
    _min: ConceptMinAggregateInputObjectSchema.optional(),
    _max: ConceptMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: ConceptWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ConceptOrderByWithAggregationInputObjectSchema,
        ConceptOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: ConceptScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ConceptScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), ConceptCountAggregateInputObjectSchema])
      .optional(),
    _min: ConceptMinAggregateInputObjectSchema.optional(),
    _max: ConceptMaxAggregateInputObjectSchema.optional(),
  }),
}
