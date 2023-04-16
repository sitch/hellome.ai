import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserStoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserStoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserStoryOrderByRelationAggregateInputSchema;
