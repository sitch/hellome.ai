import { z } from 'zod'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import { StoryCreateWithoutPageArtworksInputObjectSchema } from './StoryCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedCreateWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutPageArtworksInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const StoryCreateOrConnectWithoutPageArtworksInputObjectSchema = Schema
