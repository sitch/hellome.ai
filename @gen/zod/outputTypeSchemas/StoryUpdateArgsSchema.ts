import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryIncludeSchema } from '../inputTypeSchemas/StoryIncludeSchema'
import { StoryUpdateInputSchema } from '../inputTypeSchemas/StoryUpdateInputSchema'
import { StoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/StoryUncheckedUpdateInputSchema'
import { StoryWhereUniqueInputSchema } from '../inputTypeSchemas/StoryWhereUniqueInputSchema'
import { UserStoryFindManyArgsSchema } from "../outputTypeSchemas/UserStoryFindManyArgsSchema"
import { StoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/StoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserStory: z.union([z.boolean(),z.lazy(() => UserStoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StoryUpdateArgsSchema: z.ZodType<Prisma.StoryUpdateArgs> = z.object({
  select: StorySelectSchema.optional(),
  include: StoryIncludeSchema.optional(),
  data: z.union([ StoryUpdateInputSchema,StoryUncheckedUpdateInputSchema ]),
  where: StoryWhereUniqueInputSchema,
}).strict()

export default StoryUpdateArgsSchema;
