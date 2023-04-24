import { z } from 'zod'
import { PageUpdateWithoutTextsInputObjectSchema } from './PageUpdateWithoutTextsInput.schema'
import { PageUncheckedUpdateWithoutTextsInputObjectSchema } from './PageUncheckedUpdateWithoutTextsInput.schema'
import { PageCreateWithoutTextsInputObjectSchema } from './PageCreateWithoutTextsInput.schema'
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from './PageUncheckedCreateWithoutTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageUpsertWithoutTextsInput> = z
  .object({
    update: z.union([
      z.lazy(() => PageUpdateWithoutTextsInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateWithoutTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PageCreateWithoutTextsInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutTextsInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpsertWithoutTextsInputObjectSchema = Schema
