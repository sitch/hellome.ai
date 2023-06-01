/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateWithoutEditionInputObjectSchema } from "./PDFCreateWithoutEditionInput.schema"
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from "./PDFUncheckedCreateWithoutEditionInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./PDFWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFCreateOrConnectWithoutEditionInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PDFWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PDFCreateWithoutEditionInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutEditionInputObjectSchema),
    ]),
  })
  .strict()

export const PDFCreateOrConnectWithoutEditionInputObjectSchema = Schema
