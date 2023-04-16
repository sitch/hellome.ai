import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionCountOutputTypeSelectSchema } from './DreamBoothPredictionCountOutputTypeSelectSchema';

export const DreamBoothPredictionCountOutputTypeArgsSchema: z.ZodType<Prisma.DreamBoothPredictionCountOutputTypeArgs> = z.object({
  select: z.lazy(() => DreamBoothPredictionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DreamBoothPredictionCountOutputTypeSelectSchema;
