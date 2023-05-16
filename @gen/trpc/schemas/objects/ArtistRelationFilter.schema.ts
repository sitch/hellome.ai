import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistWhereInputObjectSchema } from "./ArtistWhereInput.schema"

const Schema: z.ZodType<Prisma.ArtistRelationFilter> = z
  .object({
    is: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ArtistWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const ArtistRelationFilterObjectSchema = Schema
