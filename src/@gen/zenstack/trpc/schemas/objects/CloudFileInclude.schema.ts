/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFArgsObjectSchema } from "./PDFArgs.schema"
import { PhotoArgsObjectSchema } from "./PhotoArgs.schema"

const Schema: z.ZodType<
  Omit<Prisma.CloudFileInclude, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    photo: z
      .union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)])
      .optional(),
    pdf: z.union([z.boolean(), z.lazy(() => PDFArgsObjectSchema)]).optional(),
  })
  .strict()

export const CloudFileIncludeObjectSchema = Schema
