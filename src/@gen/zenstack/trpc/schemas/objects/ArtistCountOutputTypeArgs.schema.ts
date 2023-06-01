/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCountOutputTypeSelectObjectSchema } from "./ArtistCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z.lazy(() => ArtistCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ArtistCountOutputTypeArgsObjectSchema = Schema
