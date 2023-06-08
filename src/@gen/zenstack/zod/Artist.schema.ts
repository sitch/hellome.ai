/* eslint-disable */
import { z } from "zod"

import { ArtistScalarFieldEnumSchema } from "./enums/ArtistScalarFieldEnum.schema"
import { ArtistCountAggregateInputObjectSchema } from "./objects/ArtistCountAggregateInput.schema"
import { ArtistCreateInputObjectSchema } from "./objects/ArtistCreateInput.schema"
import { ArtistCreateManyInputObjectSchema } from "./objects/ArtistCreateManyInput.schema"
import { ArtistIncludeObjectSchema } from "./objects/ArtistInclude.schema"
import { ArtistMaxAggregateInputObjectSchema } from "./objects/ArtistMaxAggregateInput.schema"
import { ArtistMinAggregateInputObjectSchema } from "./objects/ArtistMinAggregateInput.schema"
import { ArtistOrderByWithAggregationInputObjectSchema } from "./objects/ArtistOrderByWithAggregationInput.schema"
import { ArtistOrderByWithRelationInputObjectSchema } from "./objects/ArtistOrderByWithRelationInput.schema"
import { ArtistScalarWhereWithAggregatesInputObjectSchema } from "./objects/ArtistScalarWhereWithAggregatesInput.schema"
import { ArtistSelectObjectSchema } from "./objects/ArtistSelect.schema"
import { ArtistUpdateInputObjectSchema } from "./objects/ArtistUpdateInput.schema"
import { ArtistUpdateManyMutationInputObjectSchema } from "./objects/ArtistUpdateManyMutationInput.schema"
import { ArtistWhereInputObjectSchema } from "./objects/ArtistWhereInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./objects/ArtistWhereUniqueInput.schema"

export const ArtistSchema = {
  findUnique: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    where: ArtistWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    where: ArtistWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ArtistOrderByWithRelationInputObjectSchema,
        ArtistOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ArtistWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ArtistScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    where: ArtistWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ArtistOrderByWithRelationInputObjectSchema,
        ArtistOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ArtistWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ArtistScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    data: ArtistCreateInputObjectSchema,
  }),
  createMany: z.object({ data: ArtistCreateManyInputObjectSchema }),
  delete: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    where: ArtistWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: ArtistWhereInputObjectSchema.optional() }),
  update: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    data: ArtistUpdateInputObjectSchema,
    where: ArtistWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: ArtistUpdateManyMutationInputObjectSchema,
    where: ArtistWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: z.lazy(() => ArtistSelectObjectSchema.optional()),
    include: z.lazy(() => ArtistIncludeObjectSchema.optional()),
    where: ArtistWhereUniqueInputObjectSchema,
    create: ArtistCreateInputObjectSchema,
    update: ArtistUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: ArtistWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ArtistOrderByWithRelationInputObjectSchema,
        ArtistOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: ArtistWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), ArtistCountAggregateInputObjectSchema])
      .optional(),
    _min: ArtistMinAggregateInputObjectSchema.optional(),
    _max: ArtistMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: ArtistWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ArtistOrderByWithAggregationInputObjectSchema,
        ArtistOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: ArtistScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ArtistScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), ArtistCountAggregateInputObjectSchema])
      .optional(),
    _min: ArtistMinAggregateInputObjectSchema.optional(),
    _max: ArtistMaxAggregateInputObjectSchema.optional(),
  }),
}
