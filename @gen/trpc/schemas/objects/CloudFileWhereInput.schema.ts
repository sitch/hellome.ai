import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EnumFilePrivacyFilterObjectSchema } from "./EnumFilePrivacyFilter.schema"
import { EnumFileResourceTypeFilterObjectSchema } from "./EnumFileResourceTypeFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { JsonFilterObjectSchema } from "./JsonFilter.schema"
import { PDFRelationFilterObjectSchema } from "./PDFRelationFilter.schema"
import { PDFWhereInputObjectSchema } from "./PDFWhereInput.schema"
import { PhotoRelationFilterObjectSchema } from "./PhotoRelationFilter.schema"
import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"

const Schema: z.ZodType<Prisma.CloudFileWhereInput> = z
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
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumFileResourceTypeFilterObjectSchema),
        z.lazy(() => FileResourceTypeSchema),
      ])
      .optional(),
    filename: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    size: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    ext: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    mime: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    metadata: z.lazy(() => JsonFilterObjectSchema).optional(),
    path: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    signature: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    privacy: z
      .union([
        z.lazy(() => EnumFilePrivacyFilterObjectSchema),
        z.lazy(() => FilePrivacySchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
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
