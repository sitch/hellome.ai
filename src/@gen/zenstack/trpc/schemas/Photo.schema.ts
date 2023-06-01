/* eslint-disable */
import { z } from "zod"

import { PhotoScalarFieldEnumSchema } from "./enums/PhotoScalarFieldEnum.schema"
import { PhotoAvgAggregateInputObjectSchema } from "./objects/PhotoAvgAggregateInput.schema"
import { PhotoCountAggregateInputObjectSchema } from "./objects/PhotoCountAggregateInput.schema"
import { PhotoCreateInputObjectSchema } from "./objects/PhotoCreateInput.schema"
import { PhotoCreateManyInputObjectSchema } from "./objects/PhotoCreateManyInput.schema"
import { PhotoIncludeObjectSchema } from "./objects/PhotoInclude.schema"
import { PhotoMaxAggregateInputObjectSchema } from "./objects/PhotoMaxAggregateInput.schema"
import { PhotoMinAggregateInputObjectSchema } from "./objects/PhotoMinAggregateInput.schema"
import { PhotoOrderByWithAggregationInputObjectSchema } from "./objects/PhotoOrderByWithAggregationInput.schema"
import { PhotoOrderByWithRelationInputObjectSchema } from "./objects/PhotoOrderByWithRelationInput.schema"
import { PhotoScalarWhereWithAggregatesInputObjectSchema } from "./objects/PhotoScalarWhereWithAggregatesInput.schema"
import { PhotoSelectObjectSchema } from "./objects/PhotoSelect.schema"
import { PhotoSumAggregateInputObjectSchema } from "./objects/PhotoSumAggregateInput.schema"
import { PhotoUpdateInputObjectSchema } from "./objects/PhotoUpdateInput.schema"
import { PhotoUpdateManyMutationInputObjectSchema } from "./objects/PhotoUpdateManyMutationInput.schema"
import { PhotoWhereInputObjectSchema } from "./objects/PhotoWhereInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./objects/PhotoWhereUniqueInput.schema"

export const PhotoSchema = {
  findUnique: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    where: PhotoWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    where: PhotoWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PhotoOrderByWithRelationInputObjectSchema,
        PhotoOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PhotoWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PhotoScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    where: PhotoWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PhotoOrderByWithRelationInputObjectSchema,
        PhotoOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PhotoWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PhotoScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    data: PhotoCreateInputObjectSchema,
  }),
  createMany: z.object({ data: PhotoCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    where: PhotoWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PhotoWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    data: PhotoUpdateInputObjectSchema,
    where: PhotoWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PhotoUpdateManyMutationInputObjectSchema,
    where: PhotoWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => PhotoSelectObjectSchema.optional()),
    include: z.lazy(() => PhotoIncludeObjectSchema.optional()),
    where: PhotoWhereUniqueInputObjectSchema,
    create: PhotoCreateInputObjectSchema,
    update: PhotoUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PhotoWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PhotoOrderByWithRelationInputObjectSchema,
        PhotoOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PhotoWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PhotoCountAggregateInputObjectSchema])
      .optional(),
    _min: PhotoMinAggregateInputObjectSchema.optional(),
    _max: PhotoMaxAggregateInputObjectSchema.optional(),
    _avg: PhotoAvgAggregateInputObjectSchema.optional(),
    _sum: PhotoSumAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PhotoWhereInputObjectSchema.optional(),
    orderBy: z.union([
      PhotoOrderByWithAggregationInputObjectSchema,
      PhotoOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: PhotoScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PhotoScalarFieldEnumSchema),
  }),
}
