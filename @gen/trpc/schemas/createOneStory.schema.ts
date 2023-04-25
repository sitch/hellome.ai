import { z } from 'zod'
import { StorySelectObjectSchema } from './objects/StorySelect.schema'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StoryCreateInputObjectSchema } from './objects/StoryCreateInput.schema'
import { StoryUncheckedCreateInputObjectSchema } from './objects/StoryUncheckedCreateInput.schema'

export const StoryCreateOneSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  data: z.union([
    StoryCreateInputObjectSchema,
    StoryUncheckedCreateInputObjectSchema,
  ]),
})
