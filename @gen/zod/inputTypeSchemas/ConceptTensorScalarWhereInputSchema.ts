import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ConceptTensorScalarWhereInputSchema: z.ZodType<Prisma.ConceptTensorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptTensorScalarWhereInputSchema),z.lazy(() => ConceptTensorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptTensorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptTensorScalarWhereInputSchema),z.lazy(() => ConceptTensorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classNoun: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classPrompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instancePrompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tensorUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dreamBoothPredictionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ConceptTensorScalarWhereInputSchema;
