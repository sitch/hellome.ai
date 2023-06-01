/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCountOutputTypeSelectObjectSchema } from "./PhotoCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z.lazy(() => PhotoCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const PhotoCountOutputTypeArgsObjectSchema = Schema
