import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextUpdateWithoutStoryInputObjectSchema } from './PageTextUpdateWithoutStoryInput.schema'
import { PageTextUncheckedUpdateWithoutStoryInputObjectSchema } from './PageTextUncheckedUpdateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextUpdateWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageTextUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => PageTextUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict()

export const PageTextUpdateWithWhereUniqueWithoutStoryInputObjectSchema = Schema
