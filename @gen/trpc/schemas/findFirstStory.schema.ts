import { z } from 'zod'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema'
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'
import { StoryScalarFieldEnumSchema } from './enums/StoryScalarFieldEnum.schema'

export const StoryFindFirstSchema = z.object({
  include: StoryIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      StoryOrderByWithRelationInputObjectSchema,
      StoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StoryWhereInputObjectSchema.optional(),
  cursor: StoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(StoryScalarFieldEnumSchema).optional(),
})
