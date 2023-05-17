import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoFindManySchema } from "../findManyPhoto.schema"
import { ConceptCountOutputTypeArgsObjectSchema } from "./ConceptCountOutputTypeArgs.schema"
import { DreamBoothTrainingArgsObjectSchema } from "./DreamBoothTrainingArgs.schema"

const Schema: z.ZodType<Prisma.ConceptInclude> = z
  .object({
    dreamboothTraining: z
      .union([z.boolean(), z.lazy(() => DreamBoothTrainingArgsObjectSchema)])
      .optional(),
    photos: z
      .union([z.boolean(), z.lazy(() => PhotoFindManySchema)])
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
