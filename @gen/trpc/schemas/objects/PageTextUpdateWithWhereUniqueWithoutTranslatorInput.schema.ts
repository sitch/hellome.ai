import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithoutTranslatorInputObjectSchema } from './PageTextUpdateWithoutTranslatorInput.schema'
import { PageTextUncheckedUpdateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedUpdateWithoutTranslatorInput.schema'

import type { Prisma } from '@prisma/client'

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
