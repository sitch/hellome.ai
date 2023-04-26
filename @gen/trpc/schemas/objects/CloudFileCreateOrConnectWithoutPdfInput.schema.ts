import { CloudFileCreateWithoutPdfInputObjectSchema } from './CloudFileCreateWithoutPdfInput.schema'
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from './CloudFileUncheckedCreateWithoutPdfInput.schema'
import { CloudFileWhereUniqueInputObjectSchema } from './CloudFileWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.CloudFileCreateOrConnectWithoutPdfInput> = z
  .object({
    where: z.lazy(() => CloudFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPdfInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileCreateOrConnectWithoutPdfInputObjectSchema = Schema
