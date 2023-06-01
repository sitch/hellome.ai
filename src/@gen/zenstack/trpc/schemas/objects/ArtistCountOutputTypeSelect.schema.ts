/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    stories: z.boolean().optional(),
    pageArtworks: z.boolean().optional(),
  })
  .strict()

export const ArtistCountOutputTypeSelectObjectSchema = Schema
