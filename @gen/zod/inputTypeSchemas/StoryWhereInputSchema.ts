import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserStoryListRelationFilterSchema } from './UserStoryListRelationFilterSchema';

export const StoryWhereInputSchema: z.ZodType<Prisma.StoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StoryWhereInputSchema),z.lazy(() => StoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryWhereInputSchema),z.lazy(() => StoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserStory: z.lazy(() => UserStoryListRelationFilterSchema).optional()
}).strict();

export default StoryWhereInputSchema;
