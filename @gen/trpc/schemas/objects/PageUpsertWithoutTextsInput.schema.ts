import { PageCreateWithoutTextsInputObjectSchema } from './PageCreateWithoutTextsInput.schema'
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from './PageUncheckedCreateWithoutTextsInput.schema'
import { PageUncheckedUpdateWithoutTextsInputObjectSchema } from './PageUncheckedUpdateWithoutTextsInput.schema'
import { PageUpdateWithoutTextsInputObjectSchema } from './PageUpdateWithoutTextsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
