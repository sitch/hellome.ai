import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageWhereInputObjectSchema } from "./PageWhereInput.schema"

const Schema: z.ZodType<Prisma.PageRelationFilter> = z
  .object({
    is: z.lazy(() => PageWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => PageWhereInputObjectSchema).optional(),
  })
  .strict()

export const PageRelationFilterObjectSchema = Schema
