import { StoryCreateWithoutPageTextsInputObjectSchema } from './StoryCreateWithoutPageTextsInput.schema'
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from './StoryUncheckedCreateWithoutPageTextsInput.schema'
import { StoryUncheckedUpdateWithoutPageTextsInputObjectSchema } from './StoryUncheckedUpdateWithoutPageTextsInput.schema'
import { StoryUpdateWithoutPageTextsInputObjectSchema } from './StoryUpdateWithoutPageTextsInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
