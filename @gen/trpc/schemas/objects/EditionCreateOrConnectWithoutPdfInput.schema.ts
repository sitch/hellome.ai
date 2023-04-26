import { EditionCreateWithoutPdfInputObjectSchema } from './EditionCreateWithoutPdfInput.schema'
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from './EditionUncheckedCreateWithoutPdfInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EditionCreateOrConnectWithoutPdfInput> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EditionCreateWithoutPdfInputObjectSchema),
      z.lazy(() => EditionUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const EditionCreateOrConnectWithoutPdfInputObjectSchema = Schema
