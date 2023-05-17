import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.StoryCountOutputTypeSelect> = z
  .object({
    pages: z.boolean().optional(),
    pageArtworks: z.boolean().optional(),
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const StoryCountOutputTypeSelectObjectSchema = Schema
