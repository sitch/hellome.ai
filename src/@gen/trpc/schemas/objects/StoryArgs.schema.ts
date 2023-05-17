import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryIncludeObjectSchema } from "./StoryInclude.schema"
import { StorySelectObjectSchema } from "./StorySelect.schema"

const Schema: z.ZodType<Prisma.StoryArgs> = z
  .object({
    select: z.lazy(() => StorySelectObjectSchema).optional(),
    include: z.lazy(() => StoryIncludeObjectSchema).optional(),
  })
  .strict()

export const StoryArgsObjectSchema = Schema
