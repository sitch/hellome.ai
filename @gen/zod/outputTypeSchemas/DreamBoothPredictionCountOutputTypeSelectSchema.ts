import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DreamBoothPredictionCountOutputTypeSelectSchema: z.ZodType<Prisma.DreamBoothPredictionCountOutputTypeSelect> = z.object({
  ConceptTensor: z.boolean().optional(),
}).strict();

export default DreamBoothPredictionCountOutputTypeSelectSchema;
