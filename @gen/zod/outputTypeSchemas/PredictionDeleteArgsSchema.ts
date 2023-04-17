import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PredictionWhereUniqueInputSchema } from '../inputTypeSchemas/PredictionWhereUniqueInputSchema'
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

export const PredictionDeleteArgsSchema: z.ZodType<Prisma.PredictionDeleteArgs> = z.object({
  select: PredictionSelectSchema.optional(),
  where: PredictionWhereUniqueInputSchema,
}).strict()

export default PredictionDeleteArgsSchema;
