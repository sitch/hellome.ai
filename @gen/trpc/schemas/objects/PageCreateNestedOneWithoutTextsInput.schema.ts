import { PageCreateOrConnectWithoutTextsInputObjectSchema } from './PageCreateOrConnectWithoutTextsInput.schema'
import { PageCreateWithoutTextsInputObjectSchema } from './PageCreateWithoutTextsInput.schema'
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from './PageUncheckedCreateWithoutTextsInput.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
