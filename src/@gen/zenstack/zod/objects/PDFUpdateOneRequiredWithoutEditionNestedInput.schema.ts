/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateOrConnectWithoutEditionInputObjectSchema } from "./PDFCreateOrConnectWithoutEditionInput.schema"
import { PDFCreateWithoutEditionInputObjectSchema } from "./PDFCreateWithoutEditionInput.schema"
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from "./PDFUncheckedCreateWithoutEditionInput.schema"
import { PDFUncheckedUpdateWithoutEditionInputObjectSchema } from "./PDFUncheckedUpdateWithoutEditionInput.schema"
import { PDFUpdateWithoutEditionInputObjectSchema } from "./PDFUpdateWithoutEditionInput.schema"
import { PDFUpsertWithoutEditionInputObjectSchema } from "./PDFUpsertWithoutEditionInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./PDFWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PDFUpdateOneRequiredWithoutEditionNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => PDFCreateWithoutEditionInputObjectSchema),
        z.lazy(() => PDFUncheckedCreateWithoutEditionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PDFCreateOrConnectWithoutEditionInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => PDFUpsertWithoutEditionInputObjectSchema).optional(),
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PDFUpdateWithoutEditionInputObjectSchema),
        z.lazy(() => PDFUncheckedUpdateWithoutEditionInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PDFUpdateOneRequiredWithoutEditionNestedInputObjectSchema = Schema
