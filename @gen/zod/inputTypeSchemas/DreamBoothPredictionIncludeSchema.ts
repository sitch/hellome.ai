import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorFindManyArgsSchema } from "../outputTypeSchemas/ConceptTensorFindManyArgsSchema"
import { DreamBoothPredictionCountOutputTypeArgsSchema } from "../outputTypeSchemas/DreamBoothPredictionCountOutputTypeArgsSchema"

export const DreamBoothPredictionIncludeSchema: z.ZodType<Prisma.DreamBoothPredictionInclude> = z.object({
  ConceptTensor: z.union([z.boolean(),z.lazy(() => ConceptTensorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DreamBoothPredictionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DreamBoothPredictionIncludeSchema;
