import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionWhereInputSchema } from '../inputTypeSchemas/PredictionWhereInputSchema'
import { PredictionOrderByWithRelationInputSchema } from '../inputTypeSchemas/PredictionOrderByWithRelationInputSchema'
import { PredictionWhereUniqueInputSchema } from '../inputTypeSchemas/PredictionWhereUniqueInputSchema'
import { PredictionScalarFieldEnumSchema } from '../inputTypeSchemas/PredictionScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PredictionSelectSchema: z.ZodType<Prisma.PredictionSelect> = z.object({
  id: z.boolean().optional(),
  uuid: z.boolean().optional(),
  input: z.boolean().optional(),
  output: z.boolean().optional(),
  status: z.boolean().optional(),
  created_at: z.boolean().optional(),
  started_at: z.boolean().optional(),
  completed_at: z.boolean().optional(),
  version: z.boolean().optional(),
  metrics: z.boolean().optional(),
  error: z.boolean().optional(),
  logs: z.boolean().optional(),
}).strict()

export const PredictionFindFirstArgsSchema: z.ZodType<Prisma.PredictionFindFirstArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereInputSchema.optional(),
  orderBy: z.union([ PredictionOrderByWithRelationInputSchema.array(),PredictionOrderByWithRelationInputSchema ]).optional(),
  cursor: PredictionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PredictionScalarFieldEnumSchema.array().optional(),
}).strict()

export default PredictionFindFirstArgsSchema;
