import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryArgsSchema } from "../outputTypeSchemas/StoryArgsSchema"

export const UserStoryIncludeSchema: z.ZodType<Prisma.UserStoryInclude> = z.object({
  story: z.union([z.boolean(),z.lazy(() => StoryArgsSchema)]).optional(),
}).strict()

export default UserStoryIncludeSchema;
