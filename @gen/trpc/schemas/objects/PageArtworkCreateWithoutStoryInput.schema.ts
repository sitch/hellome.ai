import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./ArtistCreateNestedOneWithoutPageArtworksInput.schema"
import { PageCreateNestedOneWithoutArtworksInputObjectSchema } from "./PageCreateNestedOneWithoutArtworksInput.schema"
import { PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./PhotoCreateNestedOneWithoutPageArtworksInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkCreateWithoutStoryInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputObjectSchema),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
    photo: z.lazy(
      () => PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
  })
  .strict()

export const PageArtworkCreateWithoutStoryInputObjectSchema = Schema
