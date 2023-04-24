import { z } from 'zod'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import { PageArtworkUpdateWithoutStoryInputObjectSchema } from './PageArtworkUpdateWithoutStoryInput.schema'
import { PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutStoryInput.schema'
import { PageArtworkCreateWithoutStoryInputObjectSchema } from './PageArtworkCreateWithoutStoryInput.schema'
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedCreateWithoutStoryInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageArtworkUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageArtworkCreateWithoutStoryInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedCreateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpsertWithWhereUniqueWithoutStoryInputObjectSchema =
  Schema
