import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ConceptCountOutputTypeSelect> = z
  .object({
    photos: z.boolean().optional(),
  })
  .strict()

export const ConceptCountOutputTypeSelectObjectSchema = Schema
