import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StoryCountOrderByAggregateInputSchema } from './StoryCountOrderByAggregateInputSchema';
import { StoryAvgOrderByAggregateInputSchema } from './StoryAvgOrderByAggregateInputSchema';
import { StoryMaxOrderByAggregateInputSchema } from './StoryMaxOrderByAggregateInputSchema';
import { StoryMinOrderByAggregateInputSchema } from './StoryMinOrderByAggregateInputSchema';
import { StorySumOrderByAggregateInputSchema } from './StorySumOrderByAggregateInputSchema';

export const StoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StorySumOrderByAggregateInputSchema).optional()
}).strict();

export default StoryOrderByWithAggregationInputSchema;
