import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { FamilyOrderByWithRelationInputSchema } from './FamilyOrderByWithRelationInputSchema';

export const ConceptThingOrderByWithRelationInputSchema: z.ZodType<Prisma.ConceptThingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  Family: z.lazy(() => FamilyOrderByWithRelationInputSchema).optional()
}).strict();

export default ConceptThingOrderByWithRelationInputSchema;
