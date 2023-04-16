import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionWhereInputSchema } from '../inputTypeSchemas/PredictionWhereInputSchema'

export const PredictionDeleteManyArgsSchema: z.ZodType<Prisma.PredictionDeleteManyArgs> = z.object({
  where: PredictionWhereInputSchema.optional(),
}).strict()

export default PredictionDeleteManyArgsSchema;
