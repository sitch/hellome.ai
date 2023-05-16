import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutStoriesInput> = z
  .object({
    id: z.string().optional(),
    pageArtworks: z
      .lazy(
        () =>
          PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedCreateWithoutStoriesInputObjectSchema = Schema
