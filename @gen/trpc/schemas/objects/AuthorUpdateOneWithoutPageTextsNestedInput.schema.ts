import { z } from 'zod'
import { AuthorCreateWithoutPageTextsInputObjectSchema } from './AuthorCreateWithoutPageTextsInput.schema'
import { AuthorUncheckedCreateWithoutPageTextsInputObjectSchema } from './AuthorUncheckedCreateWithoutPageTextsInput.schema'
import { AuthorCreateOrConnectWithoutPageTextsInputObjectSchema } from './AuthorCreateOrConnectWithoutPageTextsInput.schema'
import { AuthorUpsertWithoutPageTextsInputObjectSchema } from './AuthorUpsertWithoutPageTextsInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorUpdateWithoutPageTextsInputObjectSchema } from './AuthorUpdateWithoutPageTextsInput.schema'
import { AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema } from './AuthorUncheckedUpdateWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateOneWithoutPageTextsNestedInput> = z
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
    upsert: z
      .lazy(() => AuthorUpsertWithoutPageTextsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthorUpdateWithoutPageTextsInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AuthorUpdateOneWithoutPageTextsNestedInputObjectSchema = Schema