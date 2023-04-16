import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorIncludeSchema } from '../inputTypeSchemas/ConceptTensorIncludeSchema'
import { ConceptTensorWhereUniqueInputSchema } from '../inputTypeSchemas/ConceptTensorWhereUniqueInputSchema'
import { DreamBoothPredictionArgsSchema } from "../outputTypeSchemas/DreamBoothPredictionArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConceptTensorSelectSchema: z.ZodType<Prisma.ConceptTensorSelect> = z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  classNoun: z.boolean().optional(),
  classPrompt: z.boolean().optional(),
  instancePrompt: z.boolean().optional(),
  tensorUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  dreamBoothPredictionId: z.boolean().optional(),
  prediction: z.union([z.boolean(),z.lazy(() => DreamBoothPredictionArgsSchema)]).optional(),
}).strict()

export const ConceptTensorFindUniqueArgsSchema: z.ZodType<Prisma.ConceptTensorFindUniqueArgs> = z.object({
  select: ConceptTensorSelectSchema.optional(),
  include: ConceptTensorIncludeSchema.optional(),
  where: ConceptTensorWhereUniqueInputSchema,
}).strict()

export default ConceptTensorFindUniqueArgsSchema;
