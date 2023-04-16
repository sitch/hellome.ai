import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConceptTensorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ConceptTensorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ConceptTensorOrderByRelationAggregateInputSchema;
