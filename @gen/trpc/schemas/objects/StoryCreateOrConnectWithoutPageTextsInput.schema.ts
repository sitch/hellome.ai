import { StoryCreateWithoutPageTextsInputObjectSchema } from './StoryCreateWithoutPageTextsInput.schema'
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from './StoryUncheckedCreateWithoutPageTextsInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutPageTextsInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageTextsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutPageTextsInputObjectSchema = Schema
