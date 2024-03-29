import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PredictionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    uuid: z.string().optional(),
  })
  .strict()

export const PredictionWhereUniqueInputObjectSchema = Schema
