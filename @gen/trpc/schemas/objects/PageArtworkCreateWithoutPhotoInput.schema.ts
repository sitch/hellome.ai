import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./ArtistCreateNestedOneWithoutPageArtworksInput.schema"
import { PageCreateNestedOneWithoutArtworksInputObjectSchema } from "./PageCreateNestedOneWithoutArtworksInput.schema"
import { StoryCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./StoryCreateNestedOneWithoutPageArtworksInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkCreateWithoutPhotoInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputObjectSchema),
    story: z.lazy(
      () => StoryCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
  })
  .strict()

export const PageArtworkCreateWithoutPhotoInputObjectSchema = Schema
