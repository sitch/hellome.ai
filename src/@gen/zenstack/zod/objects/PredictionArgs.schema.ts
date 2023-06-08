/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PredictionSelectObjectSchema } from "./PredictionSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.PredictionArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => PredictionSelectObjectSchema).optional(),
  })
  .strict()

export const PredictionArgsObjectSchema = Schema
