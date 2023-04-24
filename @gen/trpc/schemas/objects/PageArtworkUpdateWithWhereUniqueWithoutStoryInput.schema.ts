import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutStoryInputObjectSchema } from './PageArtworkUpdateWithoutStoryInput.schema'
import { PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PageArtworkUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutStoryInputObjectSchema =
  Schema
