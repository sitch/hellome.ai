import { z } from 'zod'
import { AuthorUpdateWithoutPageTextsInputObjectSchema } from './AuthorUpdateWithoutPageTextsInput.schema'
import { AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema } from './AuthorUncheckedUpdateWithoutPageTextsInput.schema'
import { AuthorCreateWithoutPageTextsInputObjectSchema } from './AuthorCreateWithoutPageTextsInput.schema'
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from './AuthorUncheckedCreateWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpsertWithoutPageTextsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AuthorUpdateWithoutPageTextsInputObjectSchema),
      z.lazy(() => AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorUpsertWithoutPageTextsInputObjectSchema = Schema
