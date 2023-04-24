import { z } from 'zod'
import { PDFUpdateWithoutFileInputObjectSchema } from './PDFUpdateWithoutFileInput.schema'
import { PDFUncheckedUpdateWithoutFileInputObjectSchema } from './PDFUncheckedUpdateWithoutFileInput.schema'
import { PDFCreateWithoutFileInputObjectSchema } from './PDFCreateWithoutFileInput.schema'
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from './PDFUncheckedCreateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

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
