import { z } from 'zod'
import { StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema'
import { StoryUpdateManyMutationInputObjectSchema } from './StoryUpdateManyMutationInput.schema'
import { StoryUncheckedUpdateManyWithoutStoriesInputObjectSchema } from './StoryUncheckedUpdateManyWithoutStoriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutArtistInput> = z
  .object({
    where: z.lazy(() => StoryScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateManyMutationInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateManyWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateManyWithWhereWithoutArtistInputObjectSchema = Schema
