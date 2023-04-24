import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithoutPageInputObjectSchema } from './PageTextUpdateWithoutPageInput.schema'
import { PageTextUncheckedUpdateWithoutPageInputObjectSchema } from './PageTextUncheckedUpdateWithoutPageInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutPageInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateWithoutPageInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutPageInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpdateWithWhereUniqueWithoutPageInputObjectSchema = Schema
