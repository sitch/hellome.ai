import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PredictionWhereUniqueInputSchema: z.ZodType<Prisma.PredictionWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  uuid: z.string().optional()
}).strict();

export default PredictionWhereUniqueInputSchema;
