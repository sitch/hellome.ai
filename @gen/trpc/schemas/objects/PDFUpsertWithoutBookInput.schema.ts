import { z } from 'zod'
import { PDFUpdateWithoutBookInputObjectSchema } from './PDFUpdateWithoutBookInput.schema'
import { PDFUncheckedUpdateWithoutBookInputObjectSchema } from './PDFUncheckedUpdateWithoutBookInput.schema'
import { PDFCreateWithoutBookInputObjectSchema } from './PDFCreateWithoutBookInput.schema'
import { PDFUncheckedCreateWithoutBookInputObjectSchema } from './PDFUncheckedCreateWithoutBookInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFUpsertWithoutBookInput> = z
  .object({
    update: z.union([
      z.lazy(() => PDFUpdateWithoutBookInputObjectSchema),
      z.lazy(() => PDFUncheckedUpdateWithoutBookInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PDFCreateWithoutBookInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutBookInputObjectSchema),
    ]),
  })
  .strict()

export const PDFUpsertWithoutBookInputObjectSchema = Schema
