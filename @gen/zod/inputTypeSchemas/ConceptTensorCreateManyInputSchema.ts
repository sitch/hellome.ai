import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptTensorCreateManyInputSchema: z.ZodType<Prisma.ConceptTensorCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  identifier: z.string(),
  classNoun: z.string(),
  classPrompt: z.string(),
  instancePrompt: z.string(),
  tensorUrl: z.string(),
  createdAt: z.coerce.date().optional(),
  dreamBoothPredictionId: z.string()
}).strict();

export default ConceptTensorCreateManyInputSchema;
