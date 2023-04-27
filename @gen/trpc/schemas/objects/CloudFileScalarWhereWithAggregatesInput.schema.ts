import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { EnumFilePrivacyWithAggregatesFilterObjectSchema } from "./EnumFilePrivacyWithAggregatesFilter.schema"
import { EnumFileResourceTypeWithAggregatesFilterObjectSchema } from "./EnumFileResourceTypeWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { JsonWithAggregatesFilterObjectSchema } from "./JsonWithAggregatesFilter.schema"
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
    resourceType: z
      .union([
        z.lazy(() => EnumFileResourceTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => FileResourceTypeSchema),
      ])
      .optional(),
    filename: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    size: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    ext: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    mime: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    metadata: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
    path: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    signature: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    privacy: z
      .union([
        z.lazy(() => EnumFilePrivacyWithAggregatesFilterObjectSchema),
        z.lazy(() => FilePrivacySchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict()

export const CloudFileScalarWhereWithAggregatesInputObjectSchema = Schema
