import { CloudFileCreateWithoutPdfInputObjectSchema } from './CloudFileCreateWithoutPdfInput.schema'
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from './CloudFileUncheckedCreateWithoutPdfInput.schema'
import { CloudFileUncheckedUpdateWithoutPdfInputObjectSchema } from './CloudFileUncheckedUpdateWithoutPdfInput.schema'
import { CloudFileUpdateWithoutPdfInputObjectSchema } from './CloudFileUpdateWithoutPdfInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileUpsertWithoutPdfInput> = z
  .object({
    update: z.union([
      z.lazy(() => CloudFileUpdateWithoutPdfInputObjectSchema),
      z.lazy(() => CloudFileUncheckedUpdateWithoutPdfInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPdfInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileUpsertWithoutPdfInputObjectSchema = Schema
