import { TranslatorCreateWithoutPageTextsInputObjectSchema } from './TranslatorCreateWithoutPageTextsInput.schema'
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedCreateWithoutPageTextsInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './TranslatorWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorCreateOrConnectWithoutPageTextsInput> =
  z
    .object({
      where: z.lazy(() => TranslatorWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TranslatorCreateWithoutPageTextsInputObjectSchema),
        z.lazy(
          () => TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema
        ),
      ]),
    })
    .strict()

export const TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema = Schema
