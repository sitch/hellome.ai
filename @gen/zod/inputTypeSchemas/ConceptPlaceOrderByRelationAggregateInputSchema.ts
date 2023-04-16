import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConceptPlaceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ConceptPlaceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ConceptPlaceOrderByRelationAggregateInputSchema;
