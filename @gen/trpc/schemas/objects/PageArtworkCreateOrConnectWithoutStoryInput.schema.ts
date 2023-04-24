import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkCreateWithoutStoryInputObjectSchema } from './PageArtworkCreateWithoutStoryInput.schema'
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedCreateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutStoryInputObjectSchema = Schema
