import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DreamBoothPredictionRelationFilterSchema } from './DreamBoothPredictionRelationFilterSchema';
import { DreamBoothPredictionWhereInputSchema } from './DreamBoothPredictionWhereInputSchema';

export const ConceptTensorWhereInputSchema: z.ZodType<Prisma.ConceptTensorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptTensorWhereInputSchema),z.lazy(() => ConceptTensorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptTensorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptTensorWhereInputSchema),z.lazy(() => ConceptTensorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classNoun: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classPrompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  instancePrompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tensorUrl: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  dreamBoothPredictionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prediction: z.union([ z.lazy(() => DreamBoothPredictionRelationFilterSchema),z.lazy(() => DreamBoothPredictionWhereInputSchema) ]).optional(),
}).strict();

export default ConceptTensorWhereInputSchema;
