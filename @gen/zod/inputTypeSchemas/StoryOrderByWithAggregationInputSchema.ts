import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StoryCountOrderByAggregateInputSchema } from './StoryCountOrderByAggregateInputSchema';
import { StoryMaxOrderByAggregateInputSchema } from './StoryMaxOrderByAggregateInputSchema';
import { StoryMinOrderByAggregateInputSchema } from './StoryMinOrderByAggregateInputSchema';

export const StoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default StoryOrderByWithAggregationInputSchema;
