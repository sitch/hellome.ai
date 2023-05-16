import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreatetagsInputObjectSchema } from "./PDFCreatetagsInput.schema"

const Schema: z.ZodType<Prisma.PDFCreateManyInput> = z
  .object({
    id: z.string().optional(),
    height: z.number(),
    width: z.number(),
    pages: z.number(),
    tags: z
      .union([z.lazy(() => PDFCreatetagsInputObjectSchema), z.string().array()])
      .optional(),
    createdAt: z.date().optional(),
    fileId: z.string(),
  })
  .strict()

export const PDFCreateManyInputObjectSchema = Schema
