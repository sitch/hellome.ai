import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionWhereInputSchema } from '../inputTypeSchemas/PredictionWhereInputSchema'
import { PredictionOrderByWithRelationInputSchema } from '../inputTypeSchemas/PredictionOrderByWithRelationInputSchema'
import { PredictionWhereUniqueInputSchema } from '../inputTypeSchemas/PredictionWhereUniqueInputSchema'

export const PredictionAggregateArgsSchema: z.ZodType<Prisma.PredictionAggregateArgs> = z.object({
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithRelationInputSchema.array(),PredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: PredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PredictionAggregateArgsSchema;
