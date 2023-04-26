import { PDFCreateWithoutEditionInputObjectSchema } from './PDFCreateWithoutEditionInput.schema'
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from './PDFUncheckedCreateWithoutEditionInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFCreateOrConnectWithoutEditionInput> = z
  .object({
    where: z.lazy(() => PDFWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PDFCreateWithoutEditionInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutEditionInputObjectSchema),
    ]),
  })
  .strict()

export const PDFCreateOrConnectWithoutEditionInputObjectSchema = Schema
