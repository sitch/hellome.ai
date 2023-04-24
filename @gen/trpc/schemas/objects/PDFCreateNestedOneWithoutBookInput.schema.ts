import { z } from 'zod'
import { PDFCreateWithoutBookInputObjectSchema } from './PDFCreateWithoutBookInput.schema'
import { PDFUncheckedCreateWithoutBookInputObjectSchema } from './PDFUncheckedCreateWithoutBookInput.schema'
import { PDFCreateOrConnectWithoutBookInputObjectSchema } from './PDFCreateOrConnectWithoutBookInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFCreateNestedOneWithoutBookInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PDFCreateWithoutBookInputObjectSchema),
        z.lazy(() => PDFUncheckedCreateWithoutBookInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PDFCreateOrConnectWithoutBookInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PDFCreateNestedOneWithoutBookInputObjectSchema = Schema
