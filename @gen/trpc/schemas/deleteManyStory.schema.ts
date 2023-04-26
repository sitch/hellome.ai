import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'
import { z } from 'zod'

export const StoryDeleteManySchema = z.object({
  where: StoryWhereInputObjectSchema.optional(),
})
