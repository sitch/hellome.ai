import { PageArtworkCreateWithoutStoryInputObjectSchema } from './PageArtworkCreateWithoutStoryInput.schema'
import { PageArtworkUncheckedCreateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedCreateWithoutStoryInput.schema'
import { PageArtworkUncheckedUpdateWithoutStoryInputObjectSchema } from './PageArtworkUncheckedUpdateWithoutStoryInput.schema'
import { PageArtworkUpdateWithoutStoryInputObjectSchema } from './PageArtworkUpdateWithoutStoryInput.schema'
import { PageArtworkWhereUniqueInputObjectSchema } from './PageArtworkWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
