import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryUpdateWithoutAuthorInputObjectSchema } from './StoryUpdateWithoutAuthorInput.schema'
import { StoryUncheckedUpdateWithoutAuthorInputObjectSchema } from './StoryUncheckedUpdateWithoutAuthorInput.schema'
import { StoryCreateWithoutAuthorInputObjectSchema } from './StoryCreateWithoutAuthorInput.schema'
import { StoryUncheckedCreateWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => StoryUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
