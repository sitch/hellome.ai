import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryFindManyArgsSchema } from "../outputTypeSchemas/UserStoryFindManyArgsSchema"
import { StoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/StoryCountOutputTypeArgsSchema"

export const StoryIncludeSchema: z.ZodType<Prisma.StoryInclude> = z.object({
  UserStory: z.union([z.boolean(),z.lazy(() => UserStoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default StoryIncludeSchema;
