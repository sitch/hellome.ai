/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingIncludeObjectSchema } from "./DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./DreamBoothTrainingSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.DreamBoothTrainingArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema).optional(),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema).optional(),
  })
  .strict()

export const DreamBoothTrainingArgsObjectSchema = Schema
