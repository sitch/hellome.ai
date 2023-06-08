/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateOrConnectWithoutFileInputObjectSchema } from "./PDFCreateOrConnectWithoutFileInput.schema"
import { PDFCreateWithoutFileInputObjectSchema } from "./PDFCreateWithoutFileInput.schema"
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from "./PDFUncheckedCreateWithoutFileInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./PDFWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFCreateNestedOneWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => PDFCreateWithoutFileInputObjectSchema),
        z.lazy(() => PDFUncheckedCreateWithoutFileInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PDFCreateOrConnectWithoutFileInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PDFCreateNestedOneWithoutFileInputObjectSchema = Schema
