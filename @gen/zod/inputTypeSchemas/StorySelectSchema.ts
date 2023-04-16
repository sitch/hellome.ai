import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryFindManyArgsSchema } from "../outputTypeSchemas/UserStoryFindManyArgsSchema"
import { StoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/StoryCountOutputTypeArgsSchema"

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserStory: z.union([z.boolean(),z.lazy(() => UserStoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default StorySelectSchema;
