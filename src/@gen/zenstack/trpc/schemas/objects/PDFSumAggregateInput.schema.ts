/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFSumAggregateInputType,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.literal(true).optional(),
    width: z.literal(true).optional(),
    pages: z.literal(true).optional(),
  })
  .strict()

export const PDFSumAggregateInputObjectSchema = Schema
