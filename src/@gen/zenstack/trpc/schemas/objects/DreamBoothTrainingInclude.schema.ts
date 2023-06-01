/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptSchema } from "../Concept.schema"
import { DreamBoothTrainingCountOutputTypeArgsObjectSchema } from "./DreamBoothTrainingCountOutputTypeArgs.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.DreamBoothTrainingInclude,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    Concept: z
      .union([z.boolean(), z.lazy(() => ConceptSchema.findMany)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => DreamBoothTrainingCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const DreamBoothTrainingIncludeObjectSchema = Schema
