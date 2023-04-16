import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateManyUserInputSchema } from './ConceptPlaceCreateManyUserInputSchema';

export const ConceptPlaceCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ConceptPlaceCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ConceptPlaceCreateManyUserInputSchema),z.lazy(() => ConceptPlaceCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ConceptPlaceCreateManyUserInputEnvelopeSchema;
