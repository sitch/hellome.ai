/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionWhereUniqueInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    userId: z.string().optional(),
    pdfId: z.string().optional(),
    id: z.string().optional(),
  })
  .strict()

export const EditionWhereUniqueInputObjectSchema = Schema
