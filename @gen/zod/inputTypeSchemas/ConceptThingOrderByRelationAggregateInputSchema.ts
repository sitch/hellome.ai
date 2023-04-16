import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConceptThingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ConceptThingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ConceptThingOrderByRelationAggregateInputSchema;
