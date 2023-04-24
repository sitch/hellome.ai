import { z } from 'zod'
import { StoryUpdateWithoutPageArtworksInputObjectSchema } from './StoryUpdateWithoutPageArtworksInput.schema'
import { StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedUpdateWithoutPageArtworksInput.schema'
import { StoryCreateWithoutPageArtworksInputObjectSchema } from './StoryCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedCreateWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryUpsertWithoutPageArtworksInput> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const StoryUpsertWithoutPageArtworksInputObjectSchema = Schema
