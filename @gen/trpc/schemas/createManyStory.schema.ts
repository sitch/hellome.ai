import { StoryCreateManyInputObjectSchema } from './objects/StoryCreateManyInput.schema'
import { z } from 'zod'

export const StoryCreateManySchema = z.object({
  data: z.union([
    StoryCreateManyInputObjectSchema,
    z.array(StoryCreateManyInputObjectSchema),
  ]),
})
