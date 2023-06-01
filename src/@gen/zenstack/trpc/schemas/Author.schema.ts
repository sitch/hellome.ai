/* eslint-disable */
import { z } from "zod"

import { AuthorScalarFieldEnumSchema } from "./enums/AuthorScalarFieldEnum.schema"
import { AuthorCountAggregateInputObjectSchema } from "./objects/AuthorCountAggregateInput.schema"
import { AuthorCreateInputObjectSchema } from "./objects/AuthorCreateInput.schema"
import { AuthorCreateManyInputObjectSchema } from "./objects/AuthorCreateManyInput.schema"
import { AuthorIncludeObjectSchema } from "./objects/AuthorInclude.schema"
import { AuthorMaxAggregateInputObjectSchema } from "./objects/AuthorMaxAggregateInput.schema"
import { AuthorMinAggregateInputObjectSchema } from "./objects/AuthorMinAggregateInput.schema"
import { AuthorOrderByWithAggregationInputObjectSchema } from "./objects/AuthorOrderByWithAggregationInput.schema"
import { AuthorOrderByWithRelationInputObjectSchema } from "./objects/AuthorOrderByWithRelationInput.schema"
import { AuthorScalarWhereWithAggregatesInputObjectSchema } from "./objects/AuthorScalarWhereWithAggregatesInput.schema"
import { AuthorSelectObjectSchema } from "./objects/AuthorSelect.schema"
import { AuthorUpdateInputObjectSchema } from "./objects/AuthorUpdateInput.schema"
import { AuthorUpdateManyMutationInputObjectSchema } from "./objects/AuthorUpdateManyMutationInput.schema"
import { AuthorWhereInputObjectSchema } from "./objects/AuthorWhereInput.schema"
import { AuthorWhereUniqueInputObjectSchema } from "./objects/AuthorWhereUniqueInput.schema"

export const AuthorSchema = {
  findUnique: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    where: AuthorWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    where: AuthorWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AuthorOrderByWithRelationInputObjectSchema,
        AuthorOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: AuthorWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(AuthorScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    where: AuthorWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AuthorOrderByWithRelationInputObjectSchema,
        AuthorOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: AuthorWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(AuthorScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    data: AuthorCreateInputObjectSchema,
  }),
  createMany: z.object({ data: AuthorCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    where: AuthorWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: AuthorWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    data: AuthorUpdateInputObjectSchema,
    where: AuthorWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: AuthorUpdateManyMutationInputObjectSchema,
    where: AuthorWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => AuthorSelectObjectSchema.optional()),
    include: z.lazy(() => AuthorIncludeObjectSchema.optional()),
    where: AuthorWhereUniqueInputObjectSchema,
    create: AuthorCreateInputObjectSchema,
    update: AuthorUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: AuthorWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        AuthorOrderByWithRelationInputObjectSchema,
        AuthorOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: AuthorWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), AuthorCountAggregateInputObjectSchema])
      .optional(),
    _min: AuthorMinAggregateInputObjectSchema.optional(),
    _max: AuthorMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: AuthorWhereInputObjectSchema.optional(),
    orderBy: z.union([
      AuthorOrderByWithAggregationInputObjectSchema,
      AuthorOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: AuthorScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(AuthorScalarFieldEnumSchema),
  }),
}
