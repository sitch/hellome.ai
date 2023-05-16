import { z } from "zod"

import { StoryIncludeObjectSchema } from "./objects/StoryInclude.schema"
import { StorySelectObjectSchema } from "./objects/StorySelect.schema"
import { StoryUncheckedUpdateInputObjectSchema } from "./objects/StoryUncheckedUpdateInput.schema"
import { StoryUpdateInputObjectSchema } from "./objects/StoryUpdateInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./objects/StoryWhereUniqueInput.schema"

export const StoryUpdateOneSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  data: z.union([
    StoryUpdateInputObjectSchema,
    StoryUncheckedUpdateInputObjectSchema,
  ]),
  where: StoryWhereUniqueInputObjectSchema,
})
