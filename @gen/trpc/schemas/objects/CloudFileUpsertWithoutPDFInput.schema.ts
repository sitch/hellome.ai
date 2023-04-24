import { z } from 'zod'
import { CloudFileUpdateWithoutPDFInputObjectSchema } from './CloudFileUpdateWithoutPDFInput.schema'
import { CloudFileUncheckedUpdateWithoutPDFInputObjectSchema } from './CloudFileUncheckedUpdateWithoutPDFInput.schema'
import { CloudFileCreateWithoutPDFInputObjectSchema } from './CloudFileCreateWithoutPDFInput.schema'
import { CloudFileUncheckedCreateWithoutPDFInputObjectSchema } from './CloudFileUncheckedCreateWithoutPDFInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileUpsertWithoutPDFInput> = z
  .object({
    update: z.union([
      z.lazy(() => CloudFileUpdateWithoutPDFInputObjectSchema),
      z.lazy(() => CloudFileUncheckedUpdateWithoutPDFInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPDFInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileUpsertWithoutPDFInputObjectSchema = Schema
