import { z } from 'zod'
import { PDFCreateWithoutEditionInputObjectSchema } from './PDFCreateWithoutEditionInput.schema'
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from './PDFUncheckedCreateWithoutEditionInput.schema'
import { PDFCreateOrConnectWithoutEditionInputObjectSchema } from './PDFCreateOrConnectWithoutEditionInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

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
