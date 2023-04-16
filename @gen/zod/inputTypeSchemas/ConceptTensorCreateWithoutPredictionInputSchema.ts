import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptTensorCreateWithoutPredictionInputSchema: z.ZodType<Prisma.ConceptTensorCreateWithoutPredictionInput> = z.object({
  id: z.string().optional(),
  identifier: z.string(),
  classNoun: z.string(),
  classPrompt: z.string(),
  instancePrompt: z.string(),
  tensorUrl: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ConceptTensorCreateWithoutPredictionInputSchema;
