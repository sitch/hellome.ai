/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { EnumCloudFileRegionFilterObjectSchema } from "./EnumCloudFileRegionFilter.schema"
import { EnumFilePrivacyFilterObjectSchema } from "./EnumFilePrivacyFilter.schema"
import { EnumFileResourceTypeFilterObjectSchema } from "./EnumFileResourceTypeFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { JsonFilterObjectSchema } from "./JsonFilter.schema"
import { PDFRelationFilterObjectSchema } from "./PDFRelationFilter.schema"
import { PDFWhereInputObjectSchema } from "./PDFWhereInput.schema"
import { PhotoRelationFilterObjectSchema } from "./PhotoRelationFilter.schema"
import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.CloudFileWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CloudFileWhereInputObjectSchema),
        z.lazy(() => CloudFileWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CloudFileWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CloudFileWhereInputObjectSchema),
        z.lazy(() => CloudFileWhereInputObjectSchema).array(),
      ])
      .optional(),
    filename: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    stem: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    extension: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    size: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    mime: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumFileResourceTypeFilterObjectSchema),
        z.lazy(() => FileResourceTypeSchema),
      ])
      .optional(),
    metadata: z.lazy(() => JsonFilterObjectSchema).optional(),
    key: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    bucket: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    region: z
      .union([
        z.lazy(() => EnumCloudFileRegionFilterObjectSchema),
        z.lazy(() => CloudFileRegionSchema),
      ])
      .optional(),
    publicUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    privacy: z
      .union([
        z.lazy(() => EnumFilePrivacyFilterObjectSchema),
        z.lazy(() => FilePrivacySchema),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    deletedAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    photo: z
      .union([
        z.lazy(() => PhotoRelationFilterObjectSchema),
        z.lazy(() => PhotoWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    pdf: z
      .union([
        z.lazy(() => PDFRelationFilterObjectSchema),
        z.lazy(() => PDFWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const CloudFileWhereInputObjectSchema = Schema
