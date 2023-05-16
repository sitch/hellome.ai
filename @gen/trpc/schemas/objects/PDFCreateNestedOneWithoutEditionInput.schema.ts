import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PDFCreateOrConnectWithoutEditionInputObjectSchema } from "./PDFCreateOrConnectWithoutEditionInput.schema"
import { PDFCreateWithoutEditionInputObjectSchema } from "./PDFCreateWithoutEditionInput.schema"
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from "./PDFUncheckedCreateWithoutEditionInput.schema"
import { PDFWhereUniqueInputObjectSchema } from "./PDFWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PDFCreateNestedOneWithoutEditionInput> = z
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
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PDFCreateNestedOneWithoutEditionInputObjectSchema = Schema
