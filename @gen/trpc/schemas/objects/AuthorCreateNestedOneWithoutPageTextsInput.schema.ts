import { z } from 'zod'
import { AuthorCreateWithoutPageTextsInputObjectSchema } from './AuthorCreateWithoutPageTextsInput.schema'
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from './AuthorUncheckedCreateWithoutPageTextsInput.schema'
import { AuthorCreateOrConnectWithoutPageTextsInputObjectSchema } from './AuthorCreateOrConnectWithoutPageTextsInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutPageTextsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthorCreateWithoutPageTextsInputObjectSchema),
        z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AuthorCreateOrConnectWithoutPageTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateNestedOneWithoutPageTextsInputObjectSchema = Schema
