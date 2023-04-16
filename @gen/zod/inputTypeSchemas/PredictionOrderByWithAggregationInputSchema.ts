import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PredictionCountOrderByAggregateInputSchema } from './PredictionCountOrderByAggregateInputSchema';
import { PredictionMaxOrderByAggregateInputSchema } from './PredictionMaxOrderByAggregateInputSchema';
import { PredictionMinOrderByAggregateInputSchema } from './PredictionMinOrderByAggregateInputSchema';

export const PredictionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PredictionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  output: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  started_at: z.lazy(() => SortOrderSchema).optional(),
  completed_at: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  metrics: z.lazy(() => SortOrderSchema).optional(),
  error: z.lazy(() => SortOrderSchema).optional(),
  logs: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PredictionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PredictionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PredictionMinOrderByAggregateInputSchema).optional()
}).strict();

export default PredictionOrderByWithAggregationInputSchema;
