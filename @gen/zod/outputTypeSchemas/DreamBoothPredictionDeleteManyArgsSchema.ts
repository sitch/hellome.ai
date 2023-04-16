import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionWhereInputSchema } from '../inputTypeSchemas/DreamBoothPredictionWhereInputSchema'

export const DreamBoothPredictionDeleteManyArgsSchema: z.ZodType<Prisma.DreamBoothPredictionDeleteManyArgs> = z.object({
  where: DreamBoothPredictionWhereInputSchema.optional(),
}).strict()

export default DreamBoothPredictionDeleteManyArgsSchema;
