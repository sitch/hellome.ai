/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { NullableJsonNullValueInputSchema } from "../enums/NullableJsonNullValueInput.schema"

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
)

const Schema: z.ZodType<
  Omit<Prisma.PredictionCreateInput, "zenstack_transaction" | "zenstack_guard">
> = z
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
    created_at: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    started_at: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    completed_at: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    version: z.string().optional().nullable(),
    metrics: z
      .union([z.lazy(() => NullableJsonNullValueInputSchema), jsonSchema])
      .optional(),
    error: z.string().optional().nullable(),
    logs: z.string().optional().nullable(),
  })
  .strict()

export const PredictionCreateInputObjectSchema = Schema
