import { StoryUpdateManyMutationInputObjectSchema } from './objects/StoryUpdateManyMutationInput.schema'
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'
import { z } from 'zod'

export const StoryUpdateManySchema = z.object({
  data: StoryUpdateManyMutationInputObjectSchema,
  where: StoryWhereInputObjectSchema.optional(),
})
