import { z } from 'zod'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import { PDFCreateWithoutEditionInputObjectSchema } from './PDFCreateWithoutEditionInput.schema'
import { PDFUncheckedCreateWithoutEditionInputObjectSchema } from './PDFUncheckedCreateWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

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
