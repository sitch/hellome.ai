import { z } from 'zod'
import { ArtistUpdateWithoutStoriesInputObjectSchema } from './ArtistUpdateWithoutStoriesInput.schema'
import { ArtistUncheckedUpdateWithoutStoriesInputObjectSchema } from './ArtistUncheckedUpdateWithoutStoriesInput.schema'
import { ArtistCreateWithoutStoriesInputObjectSchema } from './ArtistCreateWithoutStoriesInput.schema'
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from './ArtistUncheckedCreateWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutStoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutStoriesInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutStoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistUpsertWithoutStoriesInputObjectSchema = Schema
