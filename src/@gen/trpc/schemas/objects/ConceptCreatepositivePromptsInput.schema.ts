import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ConceptCreatepositivePromptsInput> = z
  .object({
    set: z.string().array(),
  })
  .strict()

export const ConceptCreatepositivePromptsInputObjectSchema = Schema
