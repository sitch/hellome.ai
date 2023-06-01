/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateNestedManyWithoutTranslatorInputObjectSchema } from "./PageTextCreateNestedManyWithoutTranslatorInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.TranslatorCreateInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    pageTexts: z
      .lazy(() => PageTextCreateNestedManyWithoutTranslatorInputObjectSchema)
      .optional(),
  })
  .strict()

export const TranslatorCreateInputObjectSchema = Schema
