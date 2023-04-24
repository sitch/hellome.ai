import { z } from 'zod'
import { CloudFileCreateWithoutPDFInputObjectSchema } from './CloudFileCreateWithoutPDFInput.schema'
import { CloudFileUncheckedCreateWithoutPDFInputObjectSchema } from './CloudFileUncheckedCreateWithoutPDFInput.schema'
import { CloudFileCreateOrConnectWithoutPDFInputObjectSchema } from './CloudFileCreateOrConnectWithoutPDFInput.schema'
import { CloudFileUpsertWithoutPDFInputObjectSchema } from './CloudFileUpsertWithoutPDFInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'
import { CloudFileUpdateWithoutPDFInputObjectSchema } from './CloudFileUpdateWithoutPDFInput.schema'
import { CloudFileUncheckedUpdateWithoutPDFInputObjectSchema } from './CloudFileUncheckedUpdateWithoutPDFInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileUpdateOneRequiredWithoutPDFNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CloudFileCreateWithoutPDFInputObjectSchema),
          z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CloudFileCreateOrConnectWithoutPDFInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CloudFileUpsertWithoutPDFInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CloudFileUpdateWithoutPDFInputObjectSchema),
          z.lazy(() => CloudFileUncheckedUpdateWithoutPDFInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const CloudFileUpdateOneRequiredWithoutPDFNestedInputObjectSchema =
  Schema
