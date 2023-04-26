import { ArtistCreateWithoutStoriesInputObjectSchema } from './ArtistCreateWithoutStoriesInput.schema'
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from './ArtistUncheckedCreateWithoutStoriesInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
