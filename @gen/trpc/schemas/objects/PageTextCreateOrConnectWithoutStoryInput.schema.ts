import { z } from 'zod'
import { PageTextWhereUniqueInputObjectSchema } from './PageTextWhereUniqueInput.schema'
import { PageTextCreateWithoutStoryInputObjectSchema } from './PageTextCreateWithoutStoryInput.schema'
import { PageTextUncheckedCreateWithoutStoryInputObjectSchema } from './PageTextUncheckedCreateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutStoryInputObjectSchema = Schema
