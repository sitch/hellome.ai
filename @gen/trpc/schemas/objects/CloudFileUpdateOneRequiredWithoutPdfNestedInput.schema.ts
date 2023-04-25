import { z } from 'zod'
import { CloudFileCreateWithoutPdfInputObjectSchema } from './CloudFileCreateWithoutPdfInput.schema'
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from './CloudFileUncheckedCreateWithoutPdfInput.schema'
import { CloudFileCreateOrConnectWithoutPdfInputObjectSchema } from './CloudFileCreateOrConnectWithoutPdfInput.schema'
import { CloudFileUpsertWithoutPdfInputObjectSchema } from './CloudFileUpsertWithoutPdfInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'
import { CloudFileUpdateWithoutPdfInputObjectSchema } from './CloudFileUpdateWithoutPdfInput.schema'
import { CloudFileUncheckedUpdateWithoutPdfInputObjectSchema } from './CloudFileUncheckedUpdateWithoutPdfInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileUpdateOneRequiredWithoutPdfNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CloudFileCreateWithoutPdfInputObjectSchema),
          z.lazy(() => CloudFileUncheckedCreateWithoutPdfInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CloudFileCreateOrConnectWithoutPdfInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CloudFileUpsertWithoutPdfInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CloudFileUpdateWithoutPdfInputObjectSchema),
          z.lazy(() => CloudFileUncheckedUpdateWithoutPdfInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const CloudFileUpdateOneRequiredWithoutPdfNestedInputObjectSchema =
  Schema
