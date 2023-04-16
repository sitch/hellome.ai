import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionSelectSchema } from '../inputTypeSchemas/DreamBoothPredictionSelectSchema';
import { DreamBoothPredictionIncludeSchema } from '../inputTypeSchemas/DreamBoothPredictionIncludeSchema';

export const DreamBoothPredictionArgsSchema: z.ZodType<Prisma.DreamBoothPredictionArgs> = z.object({
  select: z.lazy(() => DreamBoothPredictionSelectSchema).optional(),
  include: z.lazy(() => DreamBoothPredictionIncludeSchema).optional(),
}).strict();

export default DreamBoothPredictionArgsSchema;
