import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DreamBoothPredictionWhereUniqueInputSchema: z.ZodType<Prisma.DreamBoothPredictionWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default DreamBoothPredictionWhereUniqueInputSchema;
