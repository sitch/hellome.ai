/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoSchema } from "../Photo.schema"
import { ConceptCountOutputTypeArgsObjectSchema } from "./ConceptCountOutputTypeArgs.schema"
import { DreamBoothTrainingArgsObjectSchema } from "./DreamBoothTrainingArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.ConceptInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    dreamboothTraining: z
      .union([z.boolean(), z.lazy(() => DreamBoothTrainingArgsObjectSchema)])
      .optional(),
    photos: z
      .union([z.boolean(), z.lazy(() => PhotoSchema.findMany)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ConceptCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ConceptIncludeObjectSchema = Schema
