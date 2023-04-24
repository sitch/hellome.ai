import { z } from 'zod'
import { StoryCreateManyInputObjectSchema } from './objects/StoryCreateManyInput.schema'

export const StoryCreateManySchema = z.object({
  data: z.union([
    StoryCreateManyInputObjectSchema,
    z.array(StoryCreateManyInputObjectSchema),
  ]),
})
