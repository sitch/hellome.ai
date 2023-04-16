import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { FaceMeshOrderByWithRelationInputSchema } from './FaceMeshOrderByWithRelationInputSchema';
import { FamilyOrderByRelationAggregateInputSchema } from './FamilyOrderByRelationAggregateInputSchema';
import { ConceptPersonOrderByWithRelationInputSchema } from './ConceptPersonOrderByWithRelationInputSchema';
import { ConceptPlaceOrderByRelationAggregateInputSchema } from './ConceptPlaceOrderByRelationAggregateInputSchema';
import { ConceptThingOrderByRelationAggregateInputSchema } from './ConceptThingOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  faceMeshId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  nickname: z.lazy(() => SortOrderSchema).optional(),
  birthdate: z.lazy(() => SortOrderSchema).optional(),
  sex: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  genderPronounSingluar: z.lazy(() => SortOrderSchema).optional(),
  genderPronounPlural: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  face: z.lazy(() => FaceMeshOrderByWithRelationInputSchema).optional(),
  families: z.lazy(() => FamilyOrderByRelationAggregateInputSchema).optional(),
  person: z.lazy(() => ConceptPersonOrderByWithRelationInputSchema).optional(),
  places: z.lazy(() => ConceptPlaceOrderByRelationAggregateInputSchema).optional(),
  things: z.lazy(() => ConceptThingOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
