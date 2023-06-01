/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistWhereInputObjectSchema } from "./ArtistWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.ArtistRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
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
