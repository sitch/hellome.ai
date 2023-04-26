import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StorySelectObjectSchema } from './objects/StorySelect.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'
import { z } from 'zod'

export const StoryFindUniqueSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  where: StoryWhereUniqueInputObjectSchema,
})
