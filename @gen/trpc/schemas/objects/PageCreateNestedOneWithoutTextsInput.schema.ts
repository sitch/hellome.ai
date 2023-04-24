import { z } from 'zod'
import { PageCreateWithoutTextsInputObjectSchema } from './PageCreateWithoutTextsInput.schema'
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from './PageUncheckedCreateWithoutTextsInput.schema'
import { PageCreateOrConnectWithoutTextsInputObjectSchema } from './PageCreateOrConnectWithoutTextsInput.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCreateNestedOneWithoutTextsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageCreateWithoutTextsInputObjectSchema),
        z.lazy(() => PageUncheckedCreateWithoutTextsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PageCreateOrConnectWithoutTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PageCreateNestedOneWithoutTextsInputObjectSchema = Schema
