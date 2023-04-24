import { z } from 'zod'
import { AuthorCreateWithoutStoriesInputObjectSchema } from './AuthorCreateWithoutStoriesInput.schema'
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from './AuthorUncheckedCreateWithoutStoriesInput.schema'
import { AuthorCreateOrConnectWithoutStoriesInputObjectSchema } from './AuthorCreateOrConnectWithoutStoriesInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutStoriesInput> = z
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
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateNestedOneWithoutStoriesInputObjectSchema = Schema
