/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema } from "./EditionUncheckedCreateNestedOneWithoutPdfInput.schema"
import { PDFCreatetagsInputObjectSchema } from "./PDFCreatetagsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFUncheckedCreateWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    edition: z
      .lazy(() => EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFUncheckedCreateWithoutFileInputObjectSchema = Schema
