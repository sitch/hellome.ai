import { StoryCreateOrConnectWithoutPageArtworksInputObjectSchema } from './StoryCreateOrConnectWithoutPageArtworksInput.schema'
import { StoryCreateWithoutPageArtworksInputObjectSchema } from './StoryCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedCreateWithoutPageArtworksInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
