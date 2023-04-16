import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ConceptPersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConceptPersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptPersonScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptPersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptPersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptPersonScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptPersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ConceptPersonScalarWhereWithAggregatesInputSchema;
