import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryWhereInputSchema } from './UserStoryWhereInputSchema';

export const UserStoryListRelationFilterSchema: z.ZodType<Prisma.UserStoryListRelationFilter> = z.object({
  every: z.lazy(() => UserStoryWhereInputSchema).optional(),
  some: z.lazy(() => UserStoryWhereInputSchema).optional(),
  none: z.lazy(() => UserStoryWhereInputSchema).optional()
}).strict();

export default UserStoryListRelationFilterSchema;
