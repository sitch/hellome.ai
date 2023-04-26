import { StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema'
import { StoryUncheckedUpdateManyWithoutStoriesInputObjectSchema } from './StoryUncheckedUpdateManyWithoutStoriesInput.schema'
import { StoryUpdateManyMutationInputObjectSchema } from './StoryUpdateManyMutationInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => StoryScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateManyMutationInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateManyWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema
