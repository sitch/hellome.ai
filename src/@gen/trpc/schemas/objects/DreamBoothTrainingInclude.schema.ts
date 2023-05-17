import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptFindManySchema } from "../findManyConcept.schema"
import { DreamBoothTrainingCountOutputTypeArgsObjectSchema } from "./DreamBoothTrainingCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.DreamBoothTrainingInclude> = z
  .object({
    Concept: z
      .union([z.boolean(), z.lazy(() => ConceptFindManySchema)])
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
