import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { DreamBoothTrainingIncludeObjectSchema } from "./DreamBoothTrainingInclude.schema"
import { DreamBoothTrainingSelectObjectSchema } from "./DreamBoothTrainingSelect.schema"

const Schema: z.ZodType<Prisma.DreamBoothTrainingArgs> = z
  .object({
    select: z.lazy(() => DreamBoothTrainingSelectObjectSchema).optional(),
    include: z.lazy(() => DreamBoothTrainingIncludeObjectSchema).optional(),
  })
  .strict()

export const DreamBoothTrainingArgsObjectSchema = Schema
