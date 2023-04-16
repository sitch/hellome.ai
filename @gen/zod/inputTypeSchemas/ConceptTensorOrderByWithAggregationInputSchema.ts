import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ConceptTensorCountOrderByAggregateInputSchema } from './ConceptTensorCountOrderByAggregateInputSchema';
import { ConceptTensorMaxOrderByAggregateInputSchema } from './ConceptTensorMaxOrderByAggregateInputSchema';
import { ConceptTensorMinOrderByAggregateInputSchema } from './ConceptTensorMinOrderByAggregateInputSchema';

export const ConceptTensorOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConceptTensorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  classNoun: z.lazy(() => SortOrderSchema).optional(),
  classPrompt: z.lazy(() => SortOrderSchema).optional(),
  instancePrompt: z.lazy(() => SortOrderSchema).optional(),
  tensorUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  dreamBoothPredictionId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConceptTensorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConceptTensorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConceptTensorMinOrderByAggregateInputSchema).optional()
}).strict();

export default ConceptTensorOrderByWithAggregationInputSchema;
