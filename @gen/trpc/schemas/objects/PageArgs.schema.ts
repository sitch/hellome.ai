import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageIncludeObjectSchema } from "./PageInclude.schema"
import { PageSelectObjectSchema } from "./PageSelect.schema"

const Schema: z.ZodType<Prisma.PageArgs> = z
  .object({
    select: z.lazy(() => PageSelectObjectSchema).optional(),
    include: z.lazy(() => PageIncludeObjectSchema).optional(),
  })
  .strict()

export const PageArgsObjectSchema = Schema
