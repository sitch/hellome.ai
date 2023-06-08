/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptIncludeObjectSchema } from "./ConceptInclude.schema"
import { ConceptSelectObjectSchema } from "./ConceptSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.ConceptArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => ConceptSelectObjectSchema).optional(),
    include: z.lazy(() => ConceptIncludeObjectSchema).optional(),
  })
  .strict()

export const ConceptArgsObjectSchema = Schema
