import { z } from 'zod'
import { AuthorUpdateWithoutStoriesInputObjectSchema } from './AuthorUpdateWithoutStoriesInput.schema'
import { AuthorUncheckedUpdateWithoutStoriesInputObjectSchema } from './AuthorUncheckedUpdateWithoutStoriesInput.schema'
import { AuthorCreateWithoutStoriesInputObjectSchema } from './AuthorCreateWithoutStoriesInput.schema'
import { AuthorUncheckedCreateWithoutStoriesInputObjectSchema } from './AuthorUncheckedCreateWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpsertWithoutStoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => AuthorUpdateWithoutStoriesInputObjectSchema),
      z.lazy(() => AuthorUncheckedUpdateWithoutStoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AuthorCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => AuthorUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const AuthorUpsertWithoutStoriesInputObjectSchema = Schema
