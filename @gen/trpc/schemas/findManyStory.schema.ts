import { z } from "zod"

import { StoryScalarFieldEnumSchema } from "./enums/StoryScalarFieldEnum.schema"
import { StoryIncludeObjectSchema } from "./objects/StoryInclude.schema"
import { StoryOrderByWithRelationInputObjectSchema } from "./objects/StoryOrderByWithRelationInput.schema"
import { StorySelectObjectSchema } from "./objects/StorySelect.schema"
import { StoryWhereInputObjectSchema } from "./objects/StoryWhereInput.schema"
import { StoryWhereUniqueInputObjectSchema } from "./objects/StoryWhereUniqueInput.schema"

export const StoryFindManySchema = z.object({
  select: z.lazy(() => StorySelectObjectSchema.optional()),
  include: z.lazy(() => StoryIncludeObjectSchema.optional()),
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
