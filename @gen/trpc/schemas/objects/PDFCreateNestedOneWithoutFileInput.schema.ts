import { z } from 'zod'
import { PDFCreateWithoutFileInputObjectSchema } from './PDFCreateWithoutFileInput.schema'
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from './PDFUncheckedCreateWithoutFileInput.schema'
import { PDFCreateOrConnectWithoutFileInputObjectSchema } from './PDFCreateOrConnectWithoutFileInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFCreateNestedOneWithoutFileInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PDFCreateWithoutFileInputObjectSchema),
        z.lazy(() => PDFUncheckedCreateWithoutFileInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PDFCreateOrConnectWithoutFileInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PDFCreateNestedOneWithoutFileInputObjectSchema = Schema
