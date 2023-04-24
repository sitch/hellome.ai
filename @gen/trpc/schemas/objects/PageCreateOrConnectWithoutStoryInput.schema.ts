import { z } from 'zod'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'
import { PageCreateWithoutStoryInputObjectSchema } from './PageCreateWithoutStoryInput.schema'
import { PageUncheckedCreateWithoutStoryInputObjectSchema } from './PageUncheckedCreateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => PageWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageCreateOrConnectWithoutStoryInputObjectSchema = Schema
