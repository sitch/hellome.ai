import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextCreateWithoutTranslatorInputObjectSchema } from './PageTextCreateWithoutTranslatorInput.schema'
import { PageTextUncheckedCreateWithoutTranslatorInputObjectSchema } from './PageTextUncheckedCreateWithoutTranslatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutTranslatorInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PageTextCreateWithoutTranslatorInputObjectSchema),
        z.lazy(() => PageTextUncheckedCreateWithoutTranslatorInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextCreateOrConnectWithoutTranslatorInputObjectSchema = Schema
