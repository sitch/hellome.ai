import { z } from 'zod'
import { CloudFileCreateWithoutPdfInputObjectSchema } from './CloudFileCreateWithoutPdfInput.schema'
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from './CloudFileUncheckedCreateWithoutPdfInput.schema'
import { CloudFileCreateOrConnectWithoutPdfInputObjectSchema } from './CloudFileCreateOrConnectWithoutPdfInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileCreateNestedOneWithoutPdfInput> = z
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
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileCreateNestedOneWithoutPdfInputObjectSchema = Schema
