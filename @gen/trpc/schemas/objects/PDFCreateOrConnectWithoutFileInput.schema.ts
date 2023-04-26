import { PDFCreateWithoutFileInputObjectSchema } from './PDFCreateWithoutFileInput.schema'
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from './PDFUncheckedCreateWithoutFileInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
