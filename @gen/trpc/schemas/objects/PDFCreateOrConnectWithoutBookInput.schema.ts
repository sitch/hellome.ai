import { z } from 'zod'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import { PDFCreateWithoutBookInputObjectSchema } from './PDFCreateWithoutBookInput.schema'
import { PDFUncheckedCreateWithoutBookInputObjectSchema } from './PDFUncheckedCreateWithoutBookInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFCreateOrConnectWithoutBookInput> = z
  .object({
    where: z.lazy(() => PDFWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PDFCreateWithoutBookInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutBookInputObjectSchema),
    ]),
  })
  .strict()

export const PDFCreateOrConnectWithoutBookInputObjectSchema = Schema
