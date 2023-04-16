import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStorySelectSchema } from '../inputTypeSchemas/UserStorySelectSchema';
import { UserStoryIncludeSchema } from '../inputTypeSchemas/UserStoryIncludeSchema';

export const UserStoryArgsSchema: z.ZodType<Prisma.UserStoryArgs> = z.object({
  select: z.lazy(() => UserStorySelectSchema).optional(),
  include: z.lazy(() => UserStoryIncludeSchema).optional(),
}).strict();

export default UserStoryArgsSchema;
