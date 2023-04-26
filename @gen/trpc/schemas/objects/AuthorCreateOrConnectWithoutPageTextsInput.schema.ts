import { AuthorCreateWithoutPageTextsInputObjectSchema } from './AuthorCreateWithoutPageTextsInput.schema'
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from './AuthorUncheckedCreateWithoutPageTextsInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutPageTextsInput> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutPageTextsInputObjectSchema = Schema
