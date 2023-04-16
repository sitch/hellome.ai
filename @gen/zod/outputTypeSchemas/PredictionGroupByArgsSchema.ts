import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionWhereInputSchema } from '../inputTypeSchemas/PredictionWhereInputSchema'
import { PredictionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PredictionOrderByWithAggregationInputSchema'
import { PredictionScalarFieldEnumSchema } from '../inputTypeSchemas/PredictionScalarFieldEnumSchema'
import { PredictionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PredictionScalarWhereWithAggregatesInputSchema'

export const PredictionGroupByArgsSchema: z.ZodType<Prisma.PredictionGroupByArgs> = z.object({
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithAggregationInputSchema.array(),PredictionOrderByWithAggregationInputSchema ]).optional(),
  by: PredictionScalarFieldEnumSchema.array(),
  having: PredictionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default PredictionGroupByArgsSchema;
