import { StoryCreateOrConnectWithoutPageArtworksInputObjectSchema } from './StoryCreateOrConnectWithoutPageArtworksInput.schema'
import { StoryCreateWithoutPageArtworksInputObjectSchema } from './StoryCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedCreateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedCreateWithoutPageArtworksInput.schema'
import { StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema } from './StoryUncheckedUpdateWithoutPageArtworksInput.schema'
import { StoryUpdateWithoutPageArtworksInputObjectSchema } from './StoryUpdateWithoutPageArtworksInput.schema'
import { StoryUpsertWithoutPageArtworksInputObjectSchema } from './StoryUpsertWithoutPageArtworksInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutPageArtworksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutPageArtworksInputObjectSchema),
          z.lazy(
            () => StoryUncheckedCreateWithoutPageArtworksInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StoryCreateOrConnectWithoutPageArtworksInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StoryUpsertWithoutPageArtworksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StoryUpdateWithoutPageArtworksInputObjectSchema),
          z.lazy(
            () => StoryUncheckedUpdateWithoutPageArtworksInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const StoryUpdateOneRequiredWithoutPageArtworksNestedInputObjectSchema =
  Schema
