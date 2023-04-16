import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const UserStoryScalarWhereInputSchema: z.ZodType<Prisma.UserStoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserStoryScalarWhereInputSchema),z.lazy(() => UserStoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserStoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserStoryScalarWhereInputSchema),z.lazy(() => UserStoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default UserStoryScalarWhereInputSchema;
