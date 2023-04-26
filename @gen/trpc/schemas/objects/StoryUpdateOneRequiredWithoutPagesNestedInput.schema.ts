import { StoryCreateOrConnectWithoutPagesInputObjectSchema } from './StoryCreateOrConnectWithoutPagesInput.schema'
import { StoryCreateWithoutPagesInputObjectSchema } from './StoryCreateWithoutPagesInput.schema'
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from './StoryUncheckedCreateWithoutPagesInput.schema'
import { StoryUncheckedUpdateWithoutPagesInputObjectSchema } from './StoryUncheckedUpdateWithoutPagesInput.schema'
import { StoryUpdateWithoutPagesInputObjectSchema } from './StoryUpdateWithoutPagesInput.schema'
import { StoryUpsertWithoutPagesInputObjectSchema } from './StoryUpsertWithoutPagesInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
