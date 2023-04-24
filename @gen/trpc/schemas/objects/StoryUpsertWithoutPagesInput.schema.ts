import { z } from 'zod'
import { StoryUpdateWithoutPagesInputObjectSchema } from './StoryUpdateWithoutPagesInput.schema'
import { StoryUncheckedUpdateWithoutPagesInputObjectSchema } from './StoryUncheckedUpdateWithoutPagesInput.schema'
import { StoryCreateWithoutPagesInputObjectSchema } from './StoryCreateWithoutPagesInput.schema'
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from './StoryUncheckedCreateWithoutPagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpsertWithoutPagesInput> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutPagesInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutPagesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPagesInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPagesInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithoutPagesInputObjectSchema = Schema
