import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryCreateWithoutAuthorInputObjectSchema } from './StoryCreateWithoutAuthorInput.schema'
import { StoryUncheckedCreateWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutAuthorInputObjectSchema = Schema
