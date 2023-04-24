import { z } from 'zod'
import { TranslatorUpdateWithoutPageTextsInputObjectSchema } from './TranslatorUpdateWithoutPageTextsInput.schema'
import { TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedUpdateWithoutPageTextsInput.schema'
import { TranslatorCreateWithoutPageTextsInputObjectSchema } from './TranslatorCreateWithoutPageTextsInput.schema'
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedCreateWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorUpsertWithoutPageTextsInput> = z
  .object({
    update: z.union([
      z.lazy(() => TranslatorUpdateWithoutPageTextsInputObjectSchema),
      z.lazy(() => TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TranslatorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const TranslatorUpsertWithoutPageTextsInputObjectSchema = Schema
