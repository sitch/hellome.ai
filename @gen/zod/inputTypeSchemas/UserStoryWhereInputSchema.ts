import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StoryRelationFilterSchema } from './StoryRelationFilterSchema';
import { StoryWhereInputSchema } from './StoryWhereInputSchema';

export const UserStoryWhereInputSchema: z.ZodType<Prisma.UserStoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserStoryWhereInputSchema),z.lazy(() => UserStoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserStoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserStoryWhereInputSchema),z.lazy(() => UserStoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  story: z.union([ z.lazy(() => StoryRelationFilterSchema),z.lazy(() => StoryWhereInputSchema) ]).optional(),
}).strict();

export default UserStoryWhereInputSchema;
