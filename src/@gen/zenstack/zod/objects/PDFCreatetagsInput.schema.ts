/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.PDFCreatetagsInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    set: z.string().array(),
  })
  .strict()

export const PDFCreatetagsInputObjectSchema = Schema
