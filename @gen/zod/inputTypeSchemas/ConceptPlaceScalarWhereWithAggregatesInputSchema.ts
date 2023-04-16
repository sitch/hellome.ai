import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ConceptPlaceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConceptPlaceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptPlaceScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptPlaceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptPlaceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptPlaceScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptPlaceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  familyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ConceptPlaceScalarWhereWithAggregatesInputSchema;
