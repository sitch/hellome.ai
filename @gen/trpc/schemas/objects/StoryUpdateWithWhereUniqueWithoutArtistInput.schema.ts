import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithoutArtistInputObjectSchema } from './StoryUpdateWithoutArtistInput.schema'
import { StoryUncheckedUpdateWithoutArtistInputObjectSchema } from './StoryUncheckedUpdateWithoutArtistInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateWithWhereUniqueWithoutArtistInputObjectSchema = Schema
