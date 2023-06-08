/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoIncludeObjectSchema } from "./PhotoInclude.schema"
import { PhotoSelectObjectSchema } from "./PhotoSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.PhotoArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => PhotoSelectObjectSchema).optional(),
    include: z.lazy(() => PhotoIncludeObjectSchema).optional(),
  })
  .strict()

export const PhotoArgsObjectSchema = Schema
