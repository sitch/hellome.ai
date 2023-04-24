import { z } from 'zod'
import { AuthorCreateWithoutStoriesInputObjectSchema } from './AuthorCreateWithoutStoriesInput.schema'
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from './AuthorUncheckedCreateWithoutStoriesInput.schema'
import { AuthorCreateOrConnectWithoutStoriesInputObjectSchema } from './AuthorCreateOrConnectWithoutStoriesInput.schema'
import { AuthorUpsertWithoutStoriesInputObjectSchema } from './AuthorUpsertWithoutStoriesInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorUpdateWithoutStoriesInputObjectSchema } from './AuthorUpdateWithoutStoriesInput.schema'
import { AuthorUncheckedUpdateWithoutStoriesInputObjectSchema } from './AuthorUncheckedUpdateWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateOneWithoutStoriesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthorCreateWithoutStoriesInputObjectSchema),
        z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AuthorCreateOrConnectWithoutStoriesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => AuthorUpsertWithoutStoriesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthorUpdateWithoutStoriesInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AuthorUpdateOneWithoutStoriesNestedInputObjectSchema = Schema