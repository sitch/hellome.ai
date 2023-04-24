import { z } from 'zod'
import { StoryUpdateWithoutPageTextsInputObjectSchema } from './StoryUpdateWithoutPageTextsInput.schema'
import { StoryUncheckedUpdateWithoutPageTextsInputObjectSchema } from './StoryUncheckedUpdateWithoutPageTextsInput.schema'
import { StoryCreateWithoutPageTextsInputObjectSchema } from './StoryCreateWithoutPageTextsInput.schema'
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from './StoryUncheckedCreateWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpsertWithoutPageTextsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutPageTextsInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutPageTextsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithoutPageTextsInputObjectSchema = Schema
