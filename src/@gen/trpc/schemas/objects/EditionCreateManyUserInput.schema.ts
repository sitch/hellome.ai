import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.EditionCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    pdfId: z.string(),
  })
  .strict()

export const EditionCreateManyUserInputObjectSchema = Schema
