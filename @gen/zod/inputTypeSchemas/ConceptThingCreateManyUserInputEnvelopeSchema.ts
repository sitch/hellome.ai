import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingCreateManyUserInputSchema } from './ConceptThingCreateManyUserInputSchema';

export const ConceptThingCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ConceptThingCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ConceptThingCreateManyUserInputSchema),z.lazy(() => ConceptThingCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ConceptThingCreateManyUserInputEnvelopeSchema;
