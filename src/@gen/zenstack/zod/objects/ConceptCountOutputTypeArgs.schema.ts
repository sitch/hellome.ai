/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ConceptCountOutputTypeSelectObjectSchema } from "./ConceptCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ConceptCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z.lazy(() => ConceptCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const ConceptCountOutputTypeArgsObjectSchema = Schema
