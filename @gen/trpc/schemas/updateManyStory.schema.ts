import { z } from 'zod'
import { StoryUpdateManyMutationInputObjectSchema } from './objects/StoryUpdateManyMutationInput.schema'
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'

export const StoryUpdateManySchema = z.object({
  data: StoryUpdateManyMutationInputObjectSchema,
  where: StoryWhereInputObjectSchema.optional(),
})
