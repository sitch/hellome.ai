import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ConceptTensorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConceptTensorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptTensorScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptTensorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptTensorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptTensorScalarWhereWithAggregatesInputSchema),z.lazy(() => ConceptTensorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  classNoun: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  classPrompt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  instancePrompt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tensorUrl: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  dreamBoothPredictionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ConceptTensorScalarWhereWithAggregatesInputSchema;
