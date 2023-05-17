import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateNestedManyWithoutArtistInput.schema"
import { StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./StoryUncheckedCreateNestedManyWithoutArtistInput.schema"

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    stories: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    pageArtworks: z
      .lazy(
        () =>
          PageArtworkUncheckedCreateNestedManyWithoutArtistInputObjectSchema,
      )
      .optional(),
  })
  .strict()

export const ArtistUncheckedCreateInputObjectSchema = Schema
