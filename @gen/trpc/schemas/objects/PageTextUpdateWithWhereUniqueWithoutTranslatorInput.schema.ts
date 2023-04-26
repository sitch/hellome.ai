import { PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedUpdateWithoutTranslatorInput.schema'
import { PageTextUpdateWithoutTranslatorInputObjectSchema } from './PageTextUpdateWithoutTranslatorInput.schema'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutTranslatorInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateWithoutTranslatorInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpdateWithWhereUniqueWithoutTranslatorInputObjectSchema =
  Schema
