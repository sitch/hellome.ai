import { z } from 'zod'
import { StoryCreateWithoutPageArtworksInputObjectSchema } from './StoryCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedCreateWithoutPageArtworksInput.schema'
import { StoryCreateOrConnectWithoutPageArtworksInputObjectSchema } from './StoryCreateOrConnectWithoutPageArtworksInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.StoryCreateNestedOneWithoutPageArtworksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutPageArtworksInputObjectSchema),
        z.lazy(() => StoryUncheckedCreateWithoutPageArtworksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StoryCreateOrConnectWithoutPageArtworksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const StoryCreateNestedOneWithoutPageArtworksInputObjectSchema = Schema
