/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateWithoutEditionInputObjectSchema } from "./PDFCreateWithoutEditionInput.schema"
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from "./PDFUncheckedCreateWithoutEditionInput.schema"
import { PDFUncheckedUpdateWithoutEditionInputObjectSchema } from "./PDFUncheckedUpdateWithoutEditionInput.schema"
import { PDFUpdateWithoutEditionInputObjectSchema } from "./PDFUpdateWithoutEditionInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFUpsertWithoutEditionInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => PDFUpdateWithoutEditionInputObjectSchema),
      z.lazy(() => PDFUncheckedUpdateWithoutEditionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PDFCreateWithoutEditionInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutEditionInputObjectSchema),
    ]),
  })
  .strict()

export const PDFUpsertWithoutEditionInputObjectSchema = Schema
