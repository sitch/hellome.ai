import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.ArtistCountOutputTypeSelect> = z
  .object({
    stories: z.boolean().optional(),
    pageArtworks: z.boolean().optional(),
  })
  .strict()

export const ArtistCountOutputTypeSelectObjectSchema = Schema
