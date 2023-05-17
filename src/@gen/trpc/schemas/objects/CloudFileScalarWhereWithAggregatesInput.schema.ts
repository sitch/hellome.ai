import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { EnumCloudFileRegionWithAggregatesFilterObjectSchema } from "./EnumCloudFileRegionWithAggregatesFilter.schema"
import { EnumFilePrivacyWithAggregatesFilterObjectSchema } from "./EnumFilePrivacyWithAggregatesFilter.schema"
import { EnumFileResourceTypeWithAggregatesFilterObjectSchema } from "./EnumFileResourceTypeWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { JsonNullableWithAggregatesFilterObjectSchema } from "./JsonNullableWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.CloudFileScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CloudFileScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => CloudFileScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CloudFileScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CloudFileScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => CloudFileScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    filename: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    stem: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    extension: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    size: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    mime: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumFileResourceTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => FileResourceTypeSchema),
      ])
      .optional(),
    metadata: z
      .lazy(() => JsonNullableWithAggregatesFilterObjectSchema)
      .optional(),
    key: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    bucket: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    region: z
      .union([
        z.lazy(() => EnumCloudFileRegionWithAggregatesFilterObjectSchema),
        z.lazy(() => CloudFileRegionSchema),
      ])
      .optional(),
    publicUrl: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    privacy: z
      .union([
        z.lazy(() => EnumFilePrivacyWithAggregatesFilterObjectSchema),
        z.lazy(() => FilePrivacySchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict()

export const CloudFileScalarWhereWithAggregatesInputObjectSchema = Schema
