import { FilePrivacySchema } from '../enums/FilePrivacy.schema'
import { FileResourceTypeSchema } from '../enums/FileResourceType.schema'
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { EnumFilePrivacyFieldUpdateOperationsInputObjectSchema } from './EnumFilePrivacyFieldUpdateOperationsInput.schema'
import { EnumFileResourceTypeFieldUpdateOperationsInputObjectSchema } from './EnumFileResourceTypeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { PDFUpdateOneWithoutFileNestedInputObjectSchema } from './PDFUpdateOneWithoutFileNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ])
)

const Schema: z.ZodType<Prisma.CloudFileUpdateWithoutPhotoInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => FileResourceTypeSchema),
        z.lazy(
          () => EnumFileResourceTypeFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional(),
    filename: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    size: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    ext: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    mime: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    metadata: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    path: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    signature: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    privacy: z
      .union([
        z.lazy(() => FilePrivacySchema),
        z.lazy(() => EnumFilePrivacyFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pdf: z
      .lazy(() => PDFUpdateOneWithoutFileNestedInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileUpdateWithoutPhotoInputObjectSchema = Schema
