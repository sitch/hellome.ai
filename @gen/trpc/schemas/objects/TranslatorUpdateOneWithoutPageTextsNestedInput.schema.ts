import { z } from 'zod'
import { TranslatorCreateWithoutPageTextsInputObjectSchema } from './TranslatorCreateWithoutPageTextsInput.schema'
import { TranslatorUncheckedCreateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedCreateWithoutPageTextsInput.schema'
import { TranslatorCreateOrConnectWithoutPageTextsInputObjectSchema } from './TranslatorCreateOrConnectWithoutPageTextsInput.schema'
import { TranslatorUpsertWithoutPageTextsInputObjectSchema } from './TranslatorUpsertWithoutPageTextsInput.schema'
import { TranslatorWhereUniqueInputObjectSchema } from './TranslatorWhereUniqueInput.schema'
import { TranslatorUpdateWithoutPageTextsInputObjectSchema } from './TranslatorUpdateWithoutPageTextsInput.schema'
import { TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema } from './TranslatorUncheckedUpdateWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.TranslatorUpdateOneWithoutPageTextsNestedInput> =
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
      upsert: z
        .lazy(() => TranslatorUpsertWithoutPageTextsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => TranslatorWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TranslatorUpdateWithoutPageTextsInputObjectSchema),
          z.lazy(
            () => TranslatorUncheckedUpdateWithoutPageTextsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const TranslatorUpdateOneWithoutPageTextsNestedInputObjectSchema = Schema
