/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileArgsObjectSchema } from "./CloudFileArgs.schema"
import { EditionArgsObjectSchema } from "./EditionArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.PDFSelect, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    height: z.boolean().optional(),
    width: z.boolean().optional(),
    pages: z.boolean().optional(),
    tags: z.boolean().optional(),
    fileId: z.boolean().optional(),
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    edition: z
      .union([z.boolean(), z.lazy(() => EditionArgsObjectSchema)])
      .optional(),
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
  })
  .strict()

export const PDFSelectObjectSchema = Schema
