import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryArgsSchema } from "../outputTypeSchemas/StoryArgsSchema"

export const UserStorySelectSchema: z.ZodType<Prisma.UserStorySelect> = z.object({
  id: z.boolean().optional(),
  storyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
}).strict()

export default UserStorySelectSchema;
