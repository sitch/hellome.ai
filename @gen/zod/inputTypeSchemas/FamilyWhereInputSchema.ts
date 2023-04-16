import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserListRelationFilterSchema } from './UserListRelationFilterSchema';
import { ConceptPlaceListRelationFilterSchema } from './ConceptPlaceListRelationFilterSchema';
import { ConceptThingListRelationFilterSchema } from './ConceptThingListRelationFilterSchema';

export const FamilyWhereInputSchema: z.ZodType<Prisma.FamilyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FamilyWhereInputSchema),z.lazy(() => FamilyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FamilyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FamilyWhereInputSchema),z.lazy(() => FamilyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.lazy(() => UserListRelationFilterSchema).optional(),
  places: z.lazy(() => ConceptPlaceListRelationFilterSchema).optional(),
  things: z.lazy(() => ConceptThingListRelationFilterSchema).optional()
}).strict();

export default FamilyWhereInputSchema;
