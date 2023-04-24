import { z } from 'zod'
import { ArtistCreateWithoutStoriesInputObjectSchema } from './ArtistCreateWithoutStoriesInput.schema'
import { ArtistUncheckedCreateWithoutStoriesInputObjectSchema } from './ArtistUncheckedCreateWithoutStoriesInput.schema'
import { ArtistCreateOrConnectWithoutStoriesInputObjectSchema } from './ArtistCreateOrConnectWithoutStoriesInput.schema'
import { ArtistUpsertWithoutStoriesInputObjectSchema } from './ArtistUpsertWithoutStoriesInput.schema'
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema'
import { ArtistUpdateWithoutStoriesInputObjectSchema } from './ArtistUpdateWithoutStoriesInput.schema'
import { ArtistUncheckedUpdateWithoutStoriesInputObjectSchema } from './ArtistUncheckedUpdateWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ArtistUpdateOneWithoutStoriesNestedInput> = z
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
    upsert: z
      .lazy(() => ArtistUpsertWithoutStoriesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutStoriesInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutStoriesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ArtistUpdateOneWithoutStoriesNestedInputObjectSchema = Schema
