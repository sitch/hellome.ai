import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { FaceMeshCountOrderByAggregateInputSchema } from './FaceMeshCountOrderByAggregateInputSchema';
import { FaceMeshMaxOrderByAggregateInputSchema } from './FaceMeshMaxOrderByAggregateInputSchema';
import { FaceMeshMinOrderByAggregateInputSchema } from './FaceMeshMinOrderByAggregateInputSchema';

export const FaceMeshOrderByWithAggregationInputSchema: z.ZodType<Prisma.FaceMeshOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FaceMeshCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FaceMeshMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FaceMeshMinOrderByAggregateInputSchema).optional()
}).strict();

export default FaceMeshOrderByWithAggregationInputSchema;
