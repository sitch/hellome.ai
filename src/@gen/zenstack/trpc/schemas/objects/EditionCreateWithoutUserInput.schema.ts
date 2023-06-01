/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateNestedOneWithoutEditionInputObjectSchema } from "./PDFCreateNestedOneWithoutEditionInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionCreateWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutEditionInputObjectSchema),
  })
  .strict()

export const EditionCreateWithoutUserInputObjectSchema = Schema
