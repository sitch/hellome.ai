import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ConceptCreatenegativePromptsInput> = z
  .object({
    set: z.string().array(),
  })
  .strict()

export const ConceptCreatenegativePromptsInputObjectSchema = Schema
