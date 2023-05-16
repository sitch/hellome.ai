import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PredictionSelectObjectSchema } from "./PredictionSelect.schema"

const Schema: z.ZodType<Prisma.PredictionArgs> = z
  .object({
    select: z.lazy(() => PredictionSelectObjectSchema).optional(),
  })
  .strict()

export const PredictionArgsObjectSchema = Schema
