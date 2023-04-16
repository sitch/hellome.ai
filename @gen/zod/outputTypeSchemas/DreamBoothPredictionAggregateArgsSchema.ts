import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionWhereInputSchema } from '../inputTypeSchemas/DreamBoothPredictionWhereInputSchema'
import { DreamBoothPredictionOrderByWithRelationInputSchema } from '../inputTypeSchemas/DreamBoothPredictionOrderByWithRelationInputSchema'
import { DreamBoothPredictionWhereUniqueInputSchema } from '../inputTypeSchemas/DreamBoothPredictionWhereUniqueInputSchema'

export const DreamBoothPredictionAggregateArgsSchema: z.ZodType<Prisma.DreamBoothPredictionAggregateArgs> = z.object({
  where: DreamBoothPredictionWhereInputSchema.optional(),
  orderBy: z.union([ DreamBoothPredictionOrderByWithRelationInputSchema.array(),DreamBoothPredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: DreamBoothPredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default DreamBoothPredictionAggregateArgsSchema;
