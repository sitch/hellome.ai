/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateNestedOneWithoutEditionInputObjectSchema } from "./PDFCreateNestedOneWithoutEditionInput.schema"
import { UserCreateNestedOneWithoutEditionsInputObjectSchema } from "./UserCreateNestedOneWithoutEditionsInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.EditionCreateInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutEditionsInputObjectSchema),
    pdf: z.lazy(() => PDFCreateNestedOneWithoutEditionInputObjectSchema),
  })
  .strict()

export const EditionCreateInputObjectSchema = Schema
