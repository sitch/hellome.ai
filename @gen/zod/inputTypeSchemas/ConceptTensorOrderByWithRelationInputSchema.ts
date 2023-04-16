import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DreamBoothPredictionOrderByWithRelationInputSchema } from './DreamBoothPredictionOrderByWithRelationInputSchema';

export const ConceptTensorOrderByWithRelationInputSchema: z.ZodType<Prisma.ConceptTensorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  classNoun: z.lazy(() => SortOrderSchema).optional(),
  classPrompt: z.lazy(() => SortOrderSchema).optional(),
  instancePrompt: z.lazy(() => SortOrderSchema).optional(),
  tensorUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  dreamBoothPredictionId: z.lazy(() => SortOrderSchema).optional(),
  prediction: z.lazy(() => DreamBoothPredictionOrderByWithRelationInputSchema).optional()
}).strict();

export default ConceptTensorOrderByWithRelationInputSchema;
