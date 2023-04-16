import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DreamBoothPredictionCreateNestedOneWithoutConceptTensorInputSchema } from './DreamBoothPredictionCreateNestedOneWithoutConceptTensorInputSchema';

export const ConceptTensorCreateInputSchema: z.ZodType<Prisma.ConceptTensorCreateInput> = z.object({
  id: z.string().cuid().optional(),
  identifier: z.string(),
  classNoun: z.string(),
  classPrompt: z.string(),
  instancePrompt: z.string(),
  tensorUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  prediction: z.lazy(() => DreamBoothPredictionCreateNestedOneWithoutConceptTensorInputSchema)
}).strict();

export default ConceptTensorCreateInputSchema;
