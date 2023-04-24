import { z } from 'zod'
import { StoryCreateWithoutPagesInputObjectSchema } from './StoryCreateWithoutPagesInput.schema'
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from './StoryUncheckedCreateWithoutPagesInput.schema'
import { StoryCreateOrConnectWithoutPagesInputObjectSchema } from './StoryCreateOrConnectWithoutPagesInput.schema'
import { StoryUpsertWithoutPagesInputObjectSchema } from './StoryUpsertWithoutPagesInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithoutPagesInputObjectSchema } from './StoryUpdateWithoutPagesInput.schema'
import { StoryUncheckedUpdateWithoutPagesInputObjectSchema } from './StoryUncheckedUpdateWithoutPagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutPagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutPagesInputObjectSchema),
          z.lazy(() => StoryUncheckedCreateWithoutPagesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StoryCreateOrConnectWithoutPagesInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => StoryUpsertWithoutPagesInputObjectSchema).optional(),
      connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StoryUpdateWithoutPagesInputObjectSchema),
          z.lazy(() => StoryUncheckedUpdateWithoutPagesInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const StoryUpdateOneRequiredWithoutPagesNestedInputObjectSchema = Schema
