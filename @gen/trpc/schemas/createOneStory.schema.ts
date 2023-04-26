import { StoryCreateInputObjectSchema } from './objects/StoryCreateInput.schema'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StorySelectObjectSchema } from './objects/StorySelect.schema'
import { StoryUncheckedCreateInputObjectSchema } from './objects/StoryUncheckedCreateInput.schema'
import { z } from 'zod'

export const StoryCreateOneSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  data: z.union([
    StoryCreateInputObjectSchema,
    StoryUncheckedCreateInputObjectSchema,
  ]),
})
