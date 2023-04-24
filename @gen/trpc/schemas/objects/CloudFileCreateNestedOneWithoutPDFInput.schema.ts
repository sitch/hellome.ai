import { z } from 'zod'
import { CloudFileCreateWithoutPDFInputObjectSchema } from './CloudFileCreateWithoutPDFInput.schema'
import { CloudFileUncheckedCreateWithoutPDFInputObjectSchema } from './CloudFileUncheckedCreateWithoutPDFInput.schema'
import { CloudFileCreateOrConnectWithoutPDFInputObjectSchema } from './CloudFileCreateOrConnectWithoutPDFInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileCreateNestedOneWithoutPDFInput> = z
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
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileCreateNestedOneWithoutPDFInputObjectSchema = Schema
