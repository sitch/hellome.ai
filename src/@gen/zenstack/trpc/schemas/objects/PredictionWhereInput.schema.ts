/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { JsonNullableFilterObjectSchema } from "./JsonNullableFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

const Schema: z.ZodType<
  Omit<Prisma.PredictionWhereInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PredictionWhereInputObjectSchema),
        z.lazy(() => PredictionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PredictionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PredictionWhereInputObjectSchema),
        z.lazy(() => PredictionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    uuid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    input: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    output: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    status: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    started_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    completed_at: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional()
      .nullable(),
    version: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    metrics: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
    error: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    logs: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const PredictionWhereInputObjectSchema = Schema
