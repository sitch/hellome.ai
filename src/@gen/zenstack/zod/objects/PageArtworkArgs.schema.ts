/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkIncludeObjectSchema } from "./PageArtworkInclude.schema"
import { PageArtworkSelectObjectSchema } from "./PageArtworkSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.PageArtworkArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => PageArtworkSelectObjectSchema).optional(),
    include: z.lazy(() => PageArtworkIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArtworkArgsObjectSchema = Schema
