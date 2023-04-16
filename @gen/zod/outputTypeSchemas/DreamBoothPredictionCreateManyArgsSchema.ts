import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionCreateManyInputSchema } from '../inputTypeSchemas/DreamBoothPredictionCreateManyInputSchema'

export const DreamBoothPredictionCreateManyArgsSchema: z.ZodType<Prisma.DreamBoothPredictionCreateManyArgs> = z.object({
  data: z.union([ DreamBoothPredictionCreateManyInputSchema,DreamBoothPredictionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default DreamBoothPredictionCreateManyArgsSchema;
