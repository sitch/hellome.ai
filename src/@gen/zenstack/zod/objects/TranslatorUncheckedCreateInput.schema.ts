/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema } from "./PageTextUncheckedCreateNestedManyWithoutTranslatorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.TranslatorUncheckedCreateInput,
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
    pageTexts: z
      .lazy(
        () =>
          PageTextUncheckedCreateNestedManyWithoutTranslatorInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const TranslatorUncheckedCreateInputObjectSchema = Schema
