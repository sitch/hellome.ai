import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextIncludeObjectSchema } from "./PageTextInclude.schema"
import { PageTextSelectObjectSchema } from "./PageTextSelect.schema"

const Schema: z.ZodType<Prisma.PageTextArgs> = z
  .object({
    select: z.lazy(() => PageTextSelectObjectSchema).optional(),
    include: z.lazy(() => PageTextIncludeObjectSchema).optional(),
  })
  .strict()

export const PageTextArgsObjectSchema = Schema
