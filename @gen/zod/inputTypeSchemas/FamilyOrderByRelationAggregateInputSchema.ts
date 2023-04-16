import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const FamilyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FamilyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default FamilyOrderByRelationAggregateInputSchema;
