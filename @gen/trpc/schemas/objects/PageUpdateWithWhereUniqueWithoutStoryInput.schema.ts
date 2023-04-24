import { z } from 'zod'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import { PageUpdateWithoutStoryInputObjectSchema } from './PageUpdateWithoutStoryInput.schema'
import { PageUncheckedUpdateWithoutStoryInputObjectSchema } from './PageUncheckedUpdateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutStoryInput> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpdateWithWhereUniqueWithoutStoryInputObjectSchema = Schema
