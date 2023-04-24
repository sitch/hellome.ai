import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithoutArtistInputObjectSchema } from './StoryUpdateWithoutArtistInput.schema'
import { StoryUncheckedUpdateWithoutArtistInputObjectSchema } from './StoryUncheckedUpdateWithoutArtistInput.schema'
import { StoryCreateWithoutArtistInputObjectSchema } from './StoryCreateWithoutArtistInput.schema'
import { StoryUncheckedCreateWithoutArtistInputObjectSchema } from './StoryUncheckedCreateWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => StoryUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithWhereUniqueWithoutArtistInputObjectSchema = Schema
