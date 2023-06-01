/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    pageArtworks: z.boolean().optional(),
    concepts: z.boolean().optional(),
  })
  .strict()

export const PhotoCountOutputTypeSelectObjectSchema = Schema
