/* eslint-disable */
import { z } from "zod"

import { TranslatorScalarFieldEnumSchema } from "./enums/TranslatorScalarFieldEnum.schema"
import { TranslatorCountAggregateInputObjectSchema } from "./objects/TranslatorCountAggregateInput.schema"
import { TranslatorCreateInputObjectSchema } from "./objects/TranslatorCreateInput.schema"
import { TranslatorCreateManyInputObjectSchema } from "./objects/TranslatorCreateManyInput.schema"
import { TranslatorIncludeObjectSchema } from "./objects/TranslatorInclude.schema"
import { TranslatorMaxAggregateInputObjectSchema } from "./objects/TranslatorMaxAggregateInput.schema"
import { TranslatorMinAggregateInputObjectSchema } from "./objects/TranslatorMinAggregateInput.schema"
import { TranslatorOrderByWithAggregationInputObjectSchema } from "./objects/TranslatorOrderByWithAggregationInput.schema"
import { TranslatorOrderByWithRelationInputObjectSchema } from "./objects/TranslatorOrderByWithRelationInput.schema"
import { TranslatorScalarWhereWithAggregatesInputObjectSchema } from "./objects/TranslatorScalarWhereWithAggregatesInput.schema"
import { TranslatorSelectObjectSchema } from "./objects/TranslatorSelect.schema"
import { TranslatorUpdateInputObjectSchema } from "./objects/TranslatorUpdateInput.schema"
import { TranslatorUpdateManyMutationInputObjectSchema } from "./objects/TranslatorUpdateManyMutationInput.schema"
import { TranslatorWhereInputObjectSchema } from "./objects/TranslatorWhereInput.schema"
import { TranslatorWhereUniqueInputObjectSchema } from "./objects/TranslatorWhereUniqueInput.schema"

export const TranslatorSchema = {
  findUnique: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    where: TranslatorWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    where: TranslatorWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        TranslatorOrderByWithRelationInputObjectSchema,
        TranslatorOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: TranslatorWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(TranslatorScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    where: TranslatorWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        TranslatorOrderByWithRelationInputObjectSchema,
        TranslatorOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: TranslatorWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(TranslatorScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    data: TranslatorCreateInputObjectSchema,
  }),
  createMany: z.object({ data: TranslatorCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    where: TranslatorWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: TranslatorWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    data: TranslatorUpdateInputObjectSchema,
    where: TranslatorWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: TranslatorUpdateManyMutationInputObjectSchema,
    where: TranslatorWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => TranslatorSelectObjectSchema.optional()),
    include: z.lazy(() => TranslatorIncludeObjectSchema.optional()),
    where: TranslatorWhereUniqueInputObjectSchema,
    create: TranslatorCreateInputObjectSchema,
    update: TranslatorUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: TranslatorWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        TranslatorOrderByWithRelationInputObjectSchema,
        TranslatorOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: TranslatorWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), TranslatorCountAggregateInputObjectSchema])
      .optional(),
    _min: TranslatorMinAggregateInputObjectSchema.optional(),
    _max: TranslatorMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: TranslatorWhereInputObjectSchema.optional(),
    orderBy: z.union([
      TranslatorOrderByWithAggregationInputObjectSchema,
      TranslatorOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: TranslatorScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(TranslatorScalarFieldEnumSchema),
  }),
}
