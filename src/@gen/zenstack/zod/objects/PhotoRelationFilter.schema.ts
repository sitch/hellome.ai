/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"

const Schema: z.ZodType<
  Omit<Prisma.PhotoRelationFilter, "zenstack_transaction" | "zenstack_guard">
> = z
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
