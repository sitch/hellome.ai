import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionCreateManyInputSchema } from '../inputTypeSchemas/PredictionCreateManyInputSchema'

export const PredictionCreateManyArgsSchema: z.ZodType<Prisma.PredictionCreateManyArgs> = z.object({
  data: z.union([ PredictionCreateManyInputSchema,PredictionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PredictionCreateManyArgsSchema;
