import { z } from 'zod'
import { FileResourceTypeSchema } from '../enums/FileResourceType.schema'
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'
import { FilePrivacySchema } from '../enums/FilePrivacy.schema'
import { PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema } from './PhotoUncheckedCreateNestedOneWithoutFileInput.schema'
import { PDFUncheckedCreateNestedOneWithoutFileInputObjectSchema } from './PDFUncheckedCreateNestedOneWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ])
)

const Schema: z.ZodType<Prisma.CloudFileUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    resourceType: z.lazy(() => FileResourceTypeSchema),
    filename: z.string(),
    size: z.number(),
    ext: z.string(),
    mime: z.string(),
    metadata: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    path: z.string(),
    signature: z.string(),
    privacy: z.lazy(() => FilePrivacySchema).optional(),
    createdAt: z.date().optional(),
    photo: z
      .lazy(() => PhotoUncheckedCreateNestedOneWithoutFileInputObjectSchema)
      .optional(),
    pdf: z
      .lazy(() => PDFUncheckedCreateNestedOneWithoutFileInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileUncheckedCreateInputObjectSchema = Schema
