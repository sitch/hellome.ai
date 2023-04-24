import { z } from 'zod'
import { PageStatusSchema } from '../enums/PageStatus.schema'
import { StoryCreateNestedOneWithoutPageArtworksInputObjectSchema } from './StoryCreateNestedOneWithoutPageArtworksInput.schema'
import { ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema } from './ArtistCreateNestedOneWithoutPageArtworksInput.schema'
import { PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema } from './PhotoCreateNestedOneWithoutPageArtworksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageArtworkCreateWithoutPageInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    story: z.lazy(
      () => StoryCreateNestedOneWithoutPageArtworksInputObjectSchema
    ),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema
    ),
    photo: z.lazy(
      () => PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema
    ),
  })
  .strict()

export const PageArtworkCreateWithoutPageInputObjectSchema = Schema
