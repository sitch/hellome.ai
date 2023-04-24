import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithoutAuthorInputObjectSchema } from './StoryUpdateWithoutAuthorInput.schema'
import { StoryUncheckedUpdateWithoutAuthorInputObjectSchema } from './StoryUncheckedUpdateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
