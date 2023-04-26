import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ArtistOrderByWithRelationInputObjectSchema } from './ArtistOrderByWithRelationInput.schema'
import { PageOrderByWithRelationInputObjectSchema } from './PageOrderByWithRelationInput.schema'
import { PhotoOrderByWithRelationInputObjectSchema } from './PhotoOrderByWithRelationInput.schema'
import { StoryOrderByWithRelationInputObjectSchema } from './StoryOrderByWithRelationInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PageArtworkOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    pageId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    photoId: z.lazy(() => SortOrderSchema).optional(),
    page: z.lazy(() => PageOrderByWithRelationInputObjectSchema).optional(),
    story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional(),
    artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    photo: z.lazy(() => PhotoOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const PageArtworkOrderByWithRelationInputObjectSchema = Schema
