import { AuthorCreateWithoutStoriesInputObjectSchema } from './AuthorCreateWithoutStoriesInput.schema'
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from './AuthorUncheckedCreateWithoutStoriesInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
