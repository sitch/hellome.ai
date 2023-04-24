import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithoutPageInputObjectSchema } from './PageTextUpdateWithoutPageInput.schema'
import { PageTextUncheckedUpdateWithoutPageInputObjectSchema } from './PageTextUncheckedUpdateWithoutPageInput.schema'
import { PageTextCreateWithoutPageInputObjectSchema } from './PageTextCreateWithoutPageInput.schema'
import { PageTextUncheckedCreateWithoutPageInputObjectSchema } from './PageTextUncheckedCreateWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpsertWithWhereUniqueWithoutPageInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageTextUpdateWithoutPageInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutPageInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageTextCreateWithoutPageInputObjectSchema),
        z.lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpsertWithWhereUniqueWithoutPageInputObjectSchema = Schema
