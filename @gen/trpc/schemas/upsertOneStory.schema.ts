import { StoryCreateInputObjectSchema } from './objects/StoryCreateInput.schema'
import { StoryIncludeObjectSchema } from './objects/StoryInclude.schema'
import { StorySelectObjectSchema } from './objects/StorySelect.schema'
import { StoryUncheckedCreateInputObjectSchema } from './objects/StoryUncheckedCreateInput.schema'
import { StoryUncheckedUpdateInputObjectSchema } from './objects/StoryUncheckedUpdateInput.schema'
import { StoryUpdateInputObjectSchema } from './objects/StoryUpdateInput.schema'
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema'
import { z } from 'zod'

export const StoryUpsertSchema = z.object({
  select: StorySelectObjectSchema.optional(),
  include: StoryIncludeObjectSchema.optional(),
  where: StoryWhereUniqueInputObjectSchema,
  create: z.union([
    StoryCreateInputObjectSchema,
    StoryUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StoryUpdateInputObjectSchema,
    StoryUncheckedUpdateInputObjectSchema,
  ]),
})
