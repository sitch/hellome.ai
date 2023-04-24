import { z } from 'zod'
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'

export const StoryDeleteManySchema = z.object({
  where: StoryWhereInputObjectSchema.optional(),
})
