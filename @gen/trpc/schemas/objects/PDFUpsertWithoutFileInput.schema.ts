import { PDFCreateWithoutFileInputObjectSchema } from './PDFCreateWithoutFileInput.schema'
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from './PDFUncheckedCreateWithoutFileInput.schema'
import { PDFUncheckedUpdateWithoutFileInputObjectSchema } from './PDFUncheckedUpdateWithoutFileInput.schema'
import { PDFUpdateWithoutFileInputObjectSchema } from './PDFUpdateWithoutFileInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PDFUpsertWithoutFileInput> = z
  .object({
    update: z.union([
      z.lazy(() => PDFUpdateWithoutFileInputObjectSchema),
      z.lazy(() => PDFUncheckedUpdateWithoutFileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PDFCreateWithoutFileInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PDFUpsertWithoutFileInputObjectSchema = Schema
