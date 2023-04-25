import { z } from 'zod'
import { StorySelectObjectSchema } from './objects/StorySelect.schema'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'

export const StoryDeleteOneSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  where: StoryWhereUniqueInputObjectSchema,
})
