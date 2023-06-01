/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistIncludeObjectSchema } from "./ArtistInclude.schema"
import { ArtistSelectObjectSchema } from "./ArtistSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.ArtistArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => ArtistSelectObjectSchema).optional(),
    include: z.lazy(() => ArtistIncludeObjectSchema).optional(),
  })
  .strict()

export const ArtistArgsObjectSchema = Schema
