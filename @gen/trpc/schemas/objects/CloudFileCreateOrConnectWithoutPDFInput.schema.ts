import { z } from 'zod'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'
import { CloudFileCreateWithoutPDFInputObjectSchema } from './CloudFileCreateWithoutPDFInput.schema'
import { CloudFileUncheckedCreateWithoutPDFInputObjectSchema } from './CloudFileUncheckedCreateWithoutPDFInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileCreateOrConnectWithoutPDFInput> = z
  .object({
    where: z.lazy(() => CloudFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPDFInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPDFInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileCreateOrConnectWithoutPDFInputObjectSchema = Schema
