import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StorySumOrderByAggregateInputSchema: z.ZodType<Prisma.StorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StorySumOrderByAggregateInputSchema;
