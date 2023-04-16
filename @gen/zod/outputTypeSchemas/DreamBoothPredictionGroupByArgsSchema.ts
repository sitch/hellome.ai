import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionWhereInputSchema } from '../inputTypeSchemas/DreamBoothPredictionWhereInputSchema'
import { DreamBoothPredictionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DreamBoothPredictionOrderByWithAggregationInputSchema'
import { DreamBoothPredictionScalarFieldEnumSchema } from '../inputTypeSchemas/DreamBoothPredictionScalarFieldEnumSchema'
import { DreamBoothPredictionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DreamBoothPredictionScalarWhereWithAggregatesInputSchema'

export const DreamBoothPredictionGroupByArgsSchema: z.ZodType<Prisma.DreamBoothPredictionGroupByArgs> = z.object({
  where: DreamBoothPredictionWhereInputSchema.optional(),
  orderBy: z.union([ DreamBoothPredictionOrderByWithAggregationInputSchema.array(),DreamBoothPredictionOrderByWithAggregationInputSchema ]).optional(),
  by: DreamBoothPredictionScalarFieldEnumSchema.array(),
  having: DreamBoothPredictionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default DreamBoothPredictionGroupByArgsSchema;
