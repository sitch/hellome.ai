import { TranslatorCreateWithoutPageTextsInputObjectSchema } from './TranslatorCreateWithoutPageTextsInput.schema'
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedCreateWithoutPageTextsInput.schema'
import { TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedUpdateWithoutPageTextsInput.schema'
import { TranslatorUpdateWithoutPageTextsInputObjectSchema } from './TranslatorUpdateWithoutPageTextsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
