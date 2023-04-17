import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PredictionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PredictionAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PredictionAvgOrderByAggregateInputSchema;
