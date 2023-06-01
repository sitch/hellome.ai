/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFArgsObjectSchema } from "./PDFArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.EditionSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    userId: z.boolean().optional(),
    pdfId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
  })
  .strict()

export const EditionSelectObjectSchema = Schema
