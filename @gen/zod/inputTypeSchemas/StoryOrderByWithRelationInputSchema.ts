import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserStoryOrderByRelationAggregateInputSchema } from './UserStoryOrderByRelationAggregateInputSchema';

export const StoryOrderByWithRelationInputSchema: z.ZodType<Prisma.StoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  UserStory: z.lazy(() => UserStoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export default StoryOrderByWithRelationInputSchema;
