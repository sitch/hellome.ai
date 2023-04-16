import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionArgsSchema } from "../outputTypeSchemas/DreamBoothPredictionArgsSchema"

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

export default ConceptTensorSelectSchema;
