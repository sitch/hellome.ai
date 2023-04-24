import { z } from 'zod'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import { PDFCreateWithoutFileInputObjectSchema } from './PDFCreateWithoutFileInput.schema'
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from './PDFUncheckedCreateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFCreateOrConnectWithoutFileInput> = z
  .object({
    where: z.lazy(() => PDFWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PDFCreateWithoutFileInputObjectSchema),
      z.lazy(() => PDFUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PDFCreateOrConnectWithoutFileInputObjectSchema = Schema
