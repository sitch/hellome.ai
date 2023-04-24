import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryCreateWithoutPagesInputObjectSchema } from './StoryCreateWithoutPagesInput.schema'
import { StoryUncheckedCreateWithoutPagesInputObjectSchema } from './StoryUncheckedCreateWithoutPagesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutPagesInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPagesInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPagesInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutPagesInputObjectSchema = Schema
