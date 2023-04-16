import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ConceptPlaceCountOrderByAggregateInputSchema } from './ConceptPlaceCountOrderByAggregateInputSchema';
import { ConceptPlaceMaxOrderByAggregateInputSchema } from './ConceptPlaceMaxOrderByAggregateInputSchema';
import { ConceptPlaceMinOrderByAggregateInputSchema } from './ConceptPlaceMinOrderByAggregateInputSchema';

export const ConceptPlaceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConceptPlaceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConceptPlaceCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConceptPlaceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConceptPlaceMinOrderByAggregateInputSchema).optional()
}).strict();

export default ConceptPlaceOrderByWithAggregationInputSchema;
