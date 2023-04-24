import { z } from 'zod'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'

export const StoryFindUniqueSchema = z.object({
  include: StoryIncludeObjectSchema.optional(),
  where: StoryWhereUniqueInputObjectSchema,
})
