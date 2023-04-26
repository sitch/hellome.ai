import { StoryCreateWithoutPageArtworksInputObjectSchema } from './StoryCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedCreateWithoutPageArtworksInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
