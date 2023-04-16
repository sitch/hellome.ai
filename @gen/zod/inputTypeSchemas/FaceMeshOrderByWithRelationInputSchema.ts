import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByRelationAggregateInputSchema } from './UserOrderByRelationAggregateInputSchema';

export const FaceMeshOrderByWithRelationInputSchema: z.ZodType<Prisma.FaceMeshOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional()
}).strict();

export default FaceMeshOrderByWithRelationInputSchema;
