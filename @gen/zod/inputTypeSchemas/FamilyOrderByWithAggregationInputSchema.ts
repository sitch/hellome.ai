import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { FamilyCountOrderByAggregateInputSchema } from './FamilyCountOrderByAggregateInputSchema';
import { FamilyMaxOrderByAggregateInputSchema } from './FamilyMaxOrderByAggregateInputSchema';
import { FamilyMinOrderByAggregateInputSchema } from './FamilyMinOrderByAggregateInputSchema';

export const FamilyOrderByWithAggregationInputSchema: z.ZodType<Prisma.FamilyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FamilyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FamilyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FamilyMinOrderByAggregateInputSchema).optional()
}).strict();

export default FamilyOrderByWithAggregationInputSchema;
