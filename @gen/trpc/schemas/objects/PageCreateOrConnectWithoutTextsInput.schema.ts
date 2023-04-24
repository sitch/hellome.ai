import { z } from 'zod'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import { PageCreateWithoutTextsInputObjectSchema } from './PageCreateWithoutTextsInput.schema'
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from './PageUncheckedCreateWithoutTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCreateOrConnectWithoutTextsInput> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageCreateWithoutTextsInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutTextsInputObjectSchema),
    ]),
  })
  .strict()

export const PageCreateOrConnectWithoutTextsInputObjectSchema = Schema
