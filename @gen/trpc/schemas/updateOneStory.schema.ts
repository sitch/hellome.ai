import { z } from 'zod'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StoryUpdateInputObjectSchema } from './objects/StoryUpdateInput.schema'
import { StoryUncheckedUpdateInputObjectSchema } from './objects/StoryUncheckedUpdateInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'

export const StoryUpdateOneSchema = z.object({
  include: StoryIncludeObjectSchema.optional(),
  data: z.union([
    StoryUpdateInputObjectSchema,
    StoryUncheckedUpdateInputObjectSchema,
  ]),
  where: StoryWhereUniqueInputObjectSchema,
})
