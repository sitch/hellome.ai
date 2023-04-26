import { TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema } from './TranslatorCreateOrConnectWithoutPageTextsInput.schema'
import { TranslatorCreateWithoutPageTextsInputObjectSchema } from './TranslatorCreateWithoutPageTextsInput.schema'
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedCreateWithoutPageTextsInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './TranslatorWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.TranslatorCreateNestedOneWithoutPageTextsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TranslatorCreateWithoutPageTextsInputObjectSchema),
          z.lazy(
            () => TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TranslatorWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const TranslatorCreateNestedOneWithoutPageTextsInputObjectSchema = Schema
