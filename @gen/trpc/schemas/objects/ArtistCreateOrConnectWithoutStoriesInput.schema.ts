import { z } from 'zod'
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema'
import { ArtistCreateWithoutStoriesInputObjectSchema } from './ArtistCreateWithoutStoriesInput.schema'
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from './ArtistUncheckedCreateWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutStoriesInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistCreateOrConnectWithoutStoriesInputObjectSchema = Schema
