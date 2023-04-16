import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DreamBoothPredictionWhereInputSchema } from './DreamBoothPredictionWhereInputSchema';

export const DreamBoothPredictionRelationFilterSchema: z.ZodType<Prisma.DreamBoothPredictionRelationFilter> = z.object({
  is: z.lazy(() => DreamBoothPredictionWhereInputSchema).optional(),
  isNot: z.lazy(() => DreamBoothPredictionWhereInputSchema).optional()
}).strict();

export default DreamBoothPredictionRelationFilterSchema;
