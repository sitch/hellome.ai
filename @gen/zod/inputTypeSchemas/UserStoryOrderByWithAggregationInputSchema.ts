import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserStoryCountOrderByAggregateInputSchema } from './UserStoryCountOrderByAggregateInputSchema';
import { UserStoryMaxOrderByAggregateInputSchema } from './UserStoryMaxOrderByAggregateInputSchema';
import { UserStoryMinOrderByAggregateInputSchema } from './UserStoryMinOrderByAggregateInputSchema';

export const UserStoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserStoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  storyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserStoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserStoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserStoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default UserStoryOrderByWithAggregationInputSchema;
