import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateNestedOneWithoutPdfInputObjectSchema } from "./CloudFileCreateNestedOneWithoutPdfInput.schema"
import { EditionCreateNestedOneWithoutPdfInputObjectSchema } from "./EditionCreateNestedOneWithoutPdfInput.schema"
import { PDFCreatetagsInputObjectSchema } from "./PDFCreatetagsInput.schema"

const Schema: z.ZodType<Prisma.PDFCreateInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z.date().optional(),
    file: z.lazy(() => CloudFileCreateNestedOneWithoutPdfInputObjectSchema),
    edition: z
      .lazy(() => EditionCreateNestedOneWithoutPdfInputObjectSchema)
      .optional(),
  })
  .strict()

export const PDFCreateInputObjectSchema = Schema
