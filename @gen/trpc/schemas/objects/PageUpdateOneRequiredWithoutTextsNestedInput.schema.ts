import { z } from 'zod'
import { PageCreateWithoutTextsInputObjectSchema } from './PageCreateWithoutTextsInput.schema'
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from './PageUncheckedCreateWithoutTextsInput.schema'
import { PageCreateOrConnectWithoutTextsInputObjectSchema } from './PageCreateOrConnectWithoutTextsInput.schema'
import { PageUpsertWithoutTextsInputObjectSchema } from './PageUpsertWithoutTextsInput.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import { PageUpdateWithoutTextsInputObjectSchema } from './PageUpdateWithoutTextsInput.schema'
import { PageUncheckedUpdateWithoutTextsInputObjectSchema } from './PageUncheckedUpdateWithoutTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutTextsNestedInput> = z
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
    upsert: z.lazy(() => PageUpsertWithoutTextsInputObjectSchema).optional(),
    connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => PageUpdateWithoutTextsInputObjectSchema),
        z.lazy(() => PageUncheckedUpdateWithoutTextsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const PageUpdateOneRequiredWithoutTextsNestedInputObjectSchema = Schema
