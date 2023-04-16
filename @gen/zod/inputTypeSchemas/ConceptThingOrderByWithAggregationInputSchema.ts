import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ConceptThingCountOrderByAggregateInputSchema } from './ConceptThingCountOrderByAggregateInputSchema';
import { ConceptThingMaxOrderByAggregateInputSchema } from './ConceptThingMaxOrderByAggregateInputSchema';
import { ConceptThingMinOrderByAggregateInputSchema } from './ConceptThingMinOrderByAggregateInputSchema';

export const ConceptThingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConceptThingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConceptThingCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConceptThingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConceptThingMinOrderByAggregateInputSchema).optional()
}).strict();

export default ConceptThingOrderByWithAggregationInputSchema;
