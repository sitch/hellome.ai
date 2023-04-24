import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithoutTranslatorInputObjectSchema } from './PageTextUpdateWithoutTranslatorInput.schema'
import { PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedUpdateWithoutTranslatorInput.schema'
import { PageTextCreateWithoutTranslatorInputObjectSchema } from './PageTextCreateWithoutTranslatorInput.schema'
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedCreateWithoutTranslatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutTranslatorInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageTextUpdateWithoutTranslatorInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema),
        z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpsertWithWhereUniqueWithoutTranslatorInputObjectSchema =
  Schema
