import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.DreamBoothTrainingCountOutputTypeSelect> = z
  .object({
    Concept: z.boolean().optional(),
  })
  .strict()

export const DreamBoothTrainingCountOutputTypeSelectObjectSchema = Schema
