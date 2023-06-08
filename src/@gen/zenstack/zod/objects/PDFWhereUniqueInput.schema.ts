/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.PDFWhereUniqueInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    fileId: z.string().optional(),
    id: z.string().optional(),
  })
  .strict()

export const PDFWhereUniqueInputObjectSchema = Schema
