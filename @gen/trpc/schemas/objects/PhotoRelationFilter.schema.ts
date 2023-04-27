import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"

const Schema: z.ZodType<Prisma.PhotoRelationFilter> = z
  .object({
    is: z
      .lazy(() => PhotoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PhotoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const PhotoRelationFilterObjectSchema = Schema
