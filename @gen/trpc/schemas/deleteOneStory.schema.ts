import { z } from "zod"

import { StoryIncludeObjectSchema } from "./objects/StoryInclude.schema"
import { StorySelectObjectSchema } from "./objects/StorySelect.schema"
import { StoryWhereUniqueInputObjectSchema } from "./objects/StoryWhereUniqueInput.schema"

export const StoryDeleteOneSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  where: StoryWhereUniqueInputObjectSchema,
})
