import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByRelationAggregateInputSchema } from './UserOrderByRelationAggregateInputSchema';
import { ConceptPlaceOrderByRelationAggregateInputSchema } from './ConceptPlaceOrderByRelationAggregateInputSchema';
import { ConceptThingOrderByRelationAggregateInputSchema } from './ConceptThingOrderByRelationAggregateInputSchema';

export const FamilyOrderByWithRelationInputSchema: z.ZodType<Prisma.FamilyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceOrderByRelationAggregateInputSchema).optional(),
  things: z.lazy(() => ConceptThingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default FamilyOrderByWithRelationInputSchema;
