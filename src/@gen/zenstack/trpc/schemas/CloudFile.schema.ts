/* eslint-disable */
import { z } from "zod"

import { CloudFileScalarFieldEnumSchema } from "./enums/CloudFileScalarFieldEnum.schema"
import { CloudFileAvgAggregateInputObjectSchema } from "./objects/CloudFileAvgAggregateInput.schema"
import { CloudFileCountAggregateInputObjectSchema } from "./objects/CloudFileCountAggregateInput.schema"
import { CloudFileCreateInputObjectSchema } from "./objects/CloudFileCreateInput.schema"
import { CloudFileCreateManyInputObjectSchema } from "./objects/CloudFileCreateManyInput.schema"
import { CloudFileIncludeObjectSchema } from "./objects/CloudFileInclude.schema"
import { CloudFileMaxAggregateInputObjectSchema } from "./objects/CloudFileMaxAggregateInput.schema"
import { CloudFileMinAggregateInputObjectSchema } from "./objects/CloudFileMinAggregateInput.schema"
import { CloudFileOrderByWithAggregationInputObjectSchema } from "./objects/CloudFileOrderByWithAggregationInput.schema"
import { CloudFileOrderByWithRelationInputObjectSchema } from "./objects/CloudFileOrderByWithRelationInput.schema"
import { CloudFileScalarWhereWithAggregatesInputObjectSchema } from "./objects/CloudFileScalarWhereWithAggregatesInput.schema"
import { CloudFileSelectObjectSchema } from "./objects/CloudFileSelect.schema"
import { CloudFileSumAggregateInputObjectSchema } from "./objects/CloudFileSumAggregateInput.schema"
import { CloudFileUpdateInputObjectSchema } from "./objects/CloudFileUpdateInput.schema"
import { CloudFileUpdateManyMutationInputObjectSchema } from "./objects/CloudFileUpdateManyMutationInput.schema"
import { CloudFileWhereInputObjectSchema } from "./objects/CloudFileWhereInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./objects/CloudFileWhereUniqueInput.schema"

export const CloudFileSchema = {
  findUnique: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    where: CloudFileWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    where: CloudFileWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        CloudFileOrderByWithRelationInputObjectSchema,
        CloudFileOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: CloudFileWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CloudFileScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    where: CloudFileWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        CloudFileOrderByWithRelationInputObjectSchema,
        CloudFileOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: CloudFileWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CloudFileScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    data: CloudFileCreateInputObjectSchema,
  }),
  createMany: z.object({ data: CloudFileCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    where: CloudFileWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: CloudFileWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    data: CloudFileUpdateInputObjectSchema,
    where: CloudFileWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: CloudFileUpdateManyMutationInputObjectSchema,
    where: CloudFileWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => CloudFileSelectObjectSchema.optional()),
    include: z.lazy(() => CloudFileIncludeObjectSchema.optional()),
    where: CloudFileWhereUniqueInputObjectSchema,
    create: CloudFileCreateInputObjectSchema,
    update: CloudFileUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: CloudFileWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        CloudFileOrderByWithRelationInputObjectSchema,
        CloudFileOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: CloudFileWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), CloudFileCountAggregateInputObjectSchema])
      .optional(),
    _min: CloudFileMinAggregateInputObjectSchema.optional(),
    _max: CloudFileMaxAggregateInputObjectSchema.optional(),
    _avg: CloudFileAvgAggregateInputObjectSchema.optional(),
    _sum: CloudFileSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: CloudFileWhereInputObjectSchema.optional(),
    orderBy: z.union([
      CloudFileOrderByWithAggregationInputObjectSchema,
      CloudFileOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: CloudFileScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(CloudFileScalarFieldEnumSchema),
  }),
}
