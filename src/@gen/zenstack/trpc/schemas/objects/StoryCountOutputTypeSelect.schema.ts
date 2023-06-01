/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    pages: z.boolean().optional(),
    pageArtworks: z.boolean().optional(),
    pageTexts: z.boolean().optional(),
  })
  .strict()

export const StoryCountOutputTypeSelectObjectSchema = Schema
