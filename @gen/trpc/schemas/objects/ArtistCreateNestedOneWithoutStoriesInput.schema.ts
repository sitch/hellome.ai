import { z } from 'zod'
import { ArtistCreateWithoutStoriesInputObjectSchema } from './ArtistCreateWithoutStoriesInput.schema'
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from './ArtistUncheckedCreateWithoutStoriesInput.schema'
import { ArtistCreateOrConnectWithoutStoriesInputObjectSchema } from './ArtistCreateOrConnectWithoutStoriesInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutStoriesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutStoriesInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutStoriesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ArtistCreateNestedOneWithoutStoriesInputObjectSchema = Schema
