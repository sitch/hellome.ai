import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorCreateManyPredictionInputSchema } from './ConceptTensorCreateManyPredictionInputSchema';

export const ConceptTensorCreateManyPredictionInputEnvelopeSchema: z.ZodType<Prisma.ConceptTensorCreateManyPredictionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ConceptTensorCreateManyPredictionInputSchema),z.lazy(() => ConceptTensorCreateManyPredictionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ConceptTensorCreateManyPredictionInputEnvelopeSchema;
