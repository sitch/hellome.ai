import { z } from 'zod'
import { PDFCreateWithoutFileInputObjectSchema } from './PDFCreateWithoutFileInput.schema'
import { PDFUncheckedCreateWithoutFileInputObjectSchema } from './PDFUncheckedCreateWithoutFileInput.schema'
import { PDFCreateOrConnectWithoutFileInputObjectSchema } from './PDFCreateOrConnectWithoutFileInput.schema'
import { PDFUpsertWithoutFileInputObjectSchema } from './PDFUpsertWithoutFileInput.schema'
import { PDFWhereUniqueInputObjectSchema } from './PDFWhereUniqueInput.schema'
import { PDFUpdateWithoutFileInputObjectSchema } from './PDFUpdateWithoutFileInput.schema'
import { PDFUncheckedUpdateWithoutFileInputObjectSchema } from './PDFUncheckedUpdateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PDFUncheckedUpdateOneWithoutFileNestedInput> = z
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
    upsert: z.lazy(() => PDFUpsertWithoutFileInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => PDFWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PDFUpdateWithoutFileInputObjectSchema),
        z.lazy(() => PDFUncheckedUpdateWithoutFileInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PDFUncheckedUpdateOneWithoutFileNestedInputObjectSchema = Schema
