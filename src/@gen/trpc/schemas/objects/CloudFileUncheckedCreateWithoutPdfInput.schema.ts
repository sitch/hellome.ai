import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"
import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { NullableJsonNullValueInputSchema } from "../enums/NullableJsonNullValueInput.schema"
import { PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema } from "./PhotoUncheckedCreateNestedOneWithoutFileInput.schema"

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
)

const Schema: z.ZodType<Prisma.CloudFileUncheckedCreateWithoutPdfInput> = z
  .object({
    id: z.string().optional(),
    filename: z.string(),
    stem: z.string(),
    extension: z.string(),
    size: z.number(),
    mime: z.string(),
    resourceType: z.lazy(() => FileResourceTypeSchema),
    metadata: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    key: z.string(),
    bucket: z.string(),
    region: z.lazy(() => CloudFileRegionSchema),
    publicUrl: z.string().optional().nullable(),
    privacy: z.lazy(() => FilePrivacySchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    photo: z
      .lazy(() => PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileUncheckedCreateWithoutPdfInputObjectSchema = Schema
