import { PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutStoryInput.schema'
import { PageArtworkUpdateWithoutStoryInputObjectSchema } from './PageArtworkUpdateWithoutStoryInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
