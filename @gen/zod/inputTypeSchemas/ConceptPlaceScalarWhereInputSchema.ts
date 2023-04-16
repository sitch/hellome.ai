import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ConceptPlaceScalarWhereInputSchema: z.ZodType<Prisma.ConceptPlaceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptPlaceScalarWhereInputSchema),z.lazy(() => ConceptPlaceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptPlaceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptPlaceScalarWhereInputSchema),z.lazy(() => ConceptPlaceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  familyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ConceptPlaceScalarWhereInputSchema;
