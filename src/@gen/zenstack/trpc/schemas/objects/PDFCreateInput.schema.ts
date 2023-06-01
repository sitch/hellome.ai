/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateNestedOneWithoutPdfInputObjectSchema } from "./CloudFileCreateNestedOneWithoutPdfInput.schema"
import { EditionCreateNestedOneWithoutPdfInputObjectSchema } from "./EditionCreateNestedOneWithoutPdfInput.schema"
import { PDFCreatetagsInputObjectSchema } from "./PDFCreatetagsInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PDFCreateInput, "zenstack_transaction" | "zenstack_guard">
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
    file: z.lazy(() => CloudFileCreateNestedOneWithoutPdfInputObjectSchema),
    edition: z
      .lazy(() => EditionCreateNestedOneWithoutPdfInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFCreateInputObjectSchema = Schema
