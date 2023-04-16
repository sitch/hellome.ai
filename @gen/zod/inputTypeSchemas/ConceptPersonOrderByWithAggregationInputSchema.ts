import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ConceptPersonCountOrderByAggregateInputSchema } from './ConceptPersonCountOrderByAggregateInputSchema';
import { ConceptPersonMaxOrderByAggregateInputSchema } from './ConceptPersonMaxOrderByAggregateInputSchema';
import { ConceptPersonMinOrderByAggregateInputSchema } from './ConceptPersonMinOrderByAggregateInputSchema';

export const ConceptPersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConceptPersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConceptPersonCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConceptPersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConceptPersonMinOrderByAggregateInputSchema).optional()
}).strict();

export default ConceptPersonOrderByWithAggregationInputSchema;
