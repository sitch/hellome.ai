import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ])
)

const Schema: z.ZodType<Prisma.PredictionCreateInput> = z
  .object({
    id: z.string().optional(),
    uuid: z.string(),
    input: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    output: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    status: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    started_at: z.date().optional().nullable(),
    completed_at: z.date().optional().nullable(),
    version: z.string().optional().nullable(),
    metrics: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    error: z.string().optional().nullable(),
    logs: z.string().optional().nullable(),
  })
  .strict()

export const PredictionCreateInputObjectSchema = Schema
