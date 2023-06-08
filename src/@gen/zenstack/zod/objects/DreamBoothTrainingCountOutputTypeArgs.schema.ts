/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingCountOutputTypeSelectObjectSchema } from "./DreamBoothTrainingCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z
      .lazy(() => DreamBoothTrainingCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict()

export const DreamBoothTrainingCountOutputTypeArgsObjectSchema = Schema
