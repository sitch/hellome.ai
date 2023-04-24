import { z } from 'zod'
import { PDFCreateWithoutBookInputObjectSchema } from './PDFCreateWithoutBookInput.schema'
import { PDFUncheckedCreateWithoutBookInputObjectSchema } from './PDFUncheckedCreateWithoutBookInput.schema'
import { PDFCreateOrConnectWithoutBookInputObjectSchema } from './PDFCreateOrConnectWithoutBookInput.schema'
import { PDFUpsertWithoutBookInputObjectSchema } from './PDFUpsertWithoutBookInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import { PDFUpdateWithoutBookInputObjectSchema } from './PDFUpdateWithoutBookInput.schema'
import { PDFUncheckedUpdateWithoutBookInputObjectSchema } from './PDFUncheckedUpdateWithoutBookInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFUpdateOneRequiredWithoutBookNestedInput> = z
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
    upsert: z.lazy(() => PDFUpsertWithoutBookInputObjectSchema).optional(),
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PDFUpdateWithoutBookInputObjectSchema),
        z.lazy(() => PDFUncheckedUpdateWithoutBookInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PDFUpdateOneRequiredWithoutBookNestedInputObjectSchema = Schema
