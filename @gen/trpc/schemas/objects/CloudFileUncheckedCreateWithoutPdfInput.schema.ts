import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"
import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema"
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
    resourceType: z.lazy(() => FileResourceTypeSchema),
    filename: z.string(),
    size: z.number(),
    ext: z.string(),
    mime: z.string(),
    metadata: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    path: z.string(),
    signature: z.string(),
    privacy: z.lazy(() => FilePrivacySchema).optional(),
    createdAt: z.date().optional(),
    photo: z
      .lazy(() => PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileUncheckedCreateWithoutPdfInputObjectSchema = Schema
