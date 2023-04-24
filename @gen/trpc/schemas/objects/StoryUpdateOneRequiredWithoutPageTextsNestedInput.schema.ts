import { z } from 'zod'
import { StoryCreateWithoutPageTextsInputObjectSchema } from './StoryCreateWithoutPageTextsInput.schema'
import { StoryUncheckedCreateWithoutPageTextsInputObjectSchema } from './StoryUncheckedCreateWithoutPageTextsInput.schema'
import { StoryCreateOrConnectWithoutPageTextsInputObjectSchema } from './StoryCreateOrConnectWithoutPageTextsInput.schema'
import { StoryUpsertWithoutPageTextsInputObjectSchema } from './StoryUpsertWithoutPageTextsInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithoutPageTextsInputObjectSchema } from './StoryUpdateWithoutPageTextsInput.schema'
import { StoryUncheckedUpdateWithoutPageTextsInputObjectSchema } from './StoryUncheckedUpdateWithoutPageTextsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutPageTextsNestedInput> =
  z
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
      upsert: z
        .lazy(() => StoryUpsertWithoutPageTextsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StoryUpdateWithoutPageTextsInputObjectSchema),
          z.lazy(() => StoryUncheckedUpdateWithoutPageTextsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const StoryUpdateOneRequiredWithoutPageTextsNestedInputObjectSchema =
  Schema
