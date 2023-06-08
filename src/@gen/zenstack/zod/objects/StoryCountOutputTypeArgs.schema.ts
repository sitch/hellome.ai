/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCountOutputTypeSelectObjectSchema } from "./StoryCountOutputTypeSelect.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCountOutputTypeArgs,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    select: z.lazy(() => StoryCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const StoryCountOutputTypeArgsObjectSchema = Schema
