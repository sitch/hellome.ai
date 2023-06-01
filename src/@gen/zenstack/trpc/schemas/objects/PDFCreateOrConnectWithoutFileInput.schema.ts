/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateWithoutFileInputObjectSchema } from "./PDFCreateWithoutFileInput.schema"
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from "./PDFUncheckedCreateWithoutFileInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./PDFWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFCreateOrConnectWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PDFWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PDFCreateWithoutFileInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PDFCreateOrConnectWithoutFileInputObjectSchema = Schema
