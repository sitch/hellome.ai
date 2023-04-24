import { z } from 'zod'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StoryCreateInputObjectSchema } from './objects/StoryCreateInput.schema'
import { StoryUncheckedCreateInputObjectSchema } from './objects/StoryUncheckedCreateInput.schema'

export const StoryCreateOneSchema = z.object({
  include: StoryIncludeObjectSchema.optional(),
  data: z.union([
    StoryCreateInputObjectSchema,
    StoryUncheckedCreateInputObjectSchema,
  ]),
})
