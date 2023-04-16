import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DreamBoothPredictionArgsSchema } from "../outputTypeSchemas/DreamBoothPredictionArgsSchema"

export const ConceptTensorIncludeSchema: z.ZodType<Prisma.ConceptTensorInclude> = z.object({
  prediction: z.union([z.boolean(),z.lazy(() => DreamBoothPredictionArgsSchema)]).optional(),
}).strict()

export default ConceptTensorIncludeSchema;
