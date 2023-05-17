import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.ArtistScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ArtistScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const ArtistScalarWhereWithAggregatesInputObjectSchema = Schema
