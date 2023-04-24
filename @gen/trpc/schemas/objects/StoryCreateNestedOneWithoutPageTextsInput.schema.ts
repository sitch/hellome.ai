import { z } from 'zod'
import { StoryCreateWithoutPageTextsInputObjectSchema } from './StoryCreateWithoutPageTextsInput.schema'
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from './StoryUncheckedCreateWithoutPageTextsInput.schema'
import { StoryCreateOrConnectWithoutPageTextsInputObjectSchema } from './StoryCreateOrConnectWithoutPageTextsInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateNestedOneWithoutPageTextsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutPageTextsInputObjectSchema),
        z.lazy(() => StoryUncheckedCreateWithoutPageTextsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StoryCreateOrConnectWithoutPageTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const StoryCreateNestedOneWithoutPageTextsInputObjectSchema = Schema
