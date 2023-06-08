/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingWhereInputObjectSchema } from "./DreamBoothTrainingWhereInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingRelationFilter,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    is: z
      .lazy(() => DreamBoothTrainingWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DreamBoothTrainingWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const DreamBoothTrainingRelationFilterObjectSchema = Schema
