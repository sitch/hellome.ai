import { z } from 'zod'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import { EditionCreateWithoutPdfInputObjectSchema } from './EditionCreateWithoutPdfInput.schema'
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from './EditionUncheckedCreateWithoutPdfInput.schema'

import type { Prisma } from '@prisma/client'

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
