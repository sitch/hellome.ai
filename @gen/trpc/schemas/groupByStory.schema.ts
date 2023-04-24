import { z } from 'zod'
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'
import { StoryOrderByWithAggregationInputObjectSchema } from './objects/StoryOrderByWithAggregationInput.schema'
import { StoryScalarWhereWithAggregatesInputObjectSchema } from './objects/StoryScalarWhereWithAggregatesInput.schema'
import { StoryScalarFieldEnumSchema } from './enums/StoryScalarFieldEnum.schema'

export const StoryGroupBySchema = z.object({
  where: StoryWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StoryOrderByWithAggregationInputObjectSchema,
      StoryOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: StoryScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StoryScalarFieldEnumSchema),
})
