import { z } from 'zod'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorCreateWithoutStoriesInputObjectSchema } from './AuthorCreateWithoutStoriesInput.schema'
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from './AuthorUncheckedCreateWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutStoriesInput> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutStoriesInputObjectSchema = Schema
