import { PageTextCreateWithoutTranslatorInputObjectSchema } from './PageTextCreateWithoutTranslatorInput.schema'
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedCreateWithoutTranslatorInput.schema'
import { PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedUpdateWithoutTranslatorInput.schema'
import { PageTextUpdateWithoutTranslatorInputObjectSchema } from './PageTextUpdateWithoutTranslatorInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
