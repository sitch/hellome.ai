import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCountOutputTypeSelectObjectSchema } from "./StoryCountOutputTypeSelect.schema"

const Schema: z.ZodType<Prisma.StoryCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => StoryCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const StoryCountOutputTypeArgsObjectSchema = Schema
