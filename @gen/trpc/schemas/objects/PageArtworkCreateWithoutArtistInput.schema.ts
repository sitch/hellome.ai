import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageCreateNestedOneWithoutArtworksInputObjectSchema } from "./PageCreateNestedOneWithoutArtworksInput.schema"
import { PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./PhotoCreateNestedOneWithoutPageArtworksInput.schema"
import { StoryCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./StoryCreateNestedOneWithoutPageArtworksInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    status: z.lazy(() => PageStatusSchema).optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputObjectSchema),
    story: z.lazy(
      () => StoryCreateNestedOneWithoutPageArtworksInputObjectSchema
    ),
    photo: z.lazy(
      () => PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema
    ),
  })
  .strict()

export const PageArtworkCreateWithoutArtistInputObjectSchema = Schema
