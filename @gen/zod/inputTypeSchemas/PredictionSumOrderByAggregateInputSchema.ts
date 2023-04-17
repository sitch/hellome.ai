import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PredictionSumOrderByAggregateInputSchema: z.ZodType<Prisma.PredictionSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PredictionSumOrderByAggregateInputSchema;
