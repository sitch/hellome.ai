import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.EditionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.string(),
    pdfId: z.string(),
  })
  .strict()

export const EditionUncheckedCreateInputObjectSchema = Schema
