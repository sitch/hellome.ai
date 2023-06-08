/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateWithoutFileInputObjectSchema } from "./PDFCreateWithoutFileInput.schema"
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from "./PDFUncheckedCreateWithoutFileInput.schema"
import { PDFUncheckedUpdateWithoutFileInputObjectSchema } from "./PDFUncheckedUpdateWithoutFileInput.schema"
import { PDFUpdateWithoutFileInputObjectSchema } from "./PDFUpdateWithoutFileInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFUpsertWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => PDFUpdateWithoutFileInputObjectSchema),
      z.lazy(() => PDFUncheckedUpdateWithoutFileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PDFCreateWithoutFileInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PDFUpsertWithoutFileInputObjectSchema = Schema
