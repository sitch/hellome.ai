import { StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from './StoryUncheckedCreateNestedManyWithoutArtistInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutPageArtworksInput> =
  z
    .object({
      id: z.string().optional(),
      stories: z
        .lazy(
          () => StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema
        )
        .optional(),
    })
    .strict()

export const ArtistUncheckedCreateWithoutPageArtworksInputObjectSchema = Schema
