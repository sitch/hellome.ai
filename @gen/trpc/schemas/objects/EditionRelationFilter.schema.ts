import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionWhereInputObjectSchema } from "./EditionWhereInput.schema"

const Schema: z.ZodType<Prisma.EditionRelationFilter> = z
  .object({
    is: z
      .lazy(() => EditionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EditionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const EditionRelationFilterObjectSchema = Schema
