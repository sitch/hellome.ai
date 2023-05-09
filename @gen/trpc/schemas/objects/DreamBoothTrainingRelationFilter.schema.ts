import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingWhereInputObjectSchema } from "./DreamBoothTrainingWhereInput.schema"

const Schema: z.ZodType<Prisma.DreamBoothTrainingRelationFilter> = z
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
