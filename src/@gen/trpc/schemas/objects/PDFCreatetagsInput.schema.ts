import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.PDFCreatetagsInput> = z
  .object({
    set: z.string().array(),
  })
  .strict()

export const PDFCreatetagsInputObjectSchema = Schema
