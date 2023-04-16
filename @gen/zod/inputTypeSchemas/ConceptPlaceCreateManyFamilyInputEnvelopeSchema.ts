import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceCreateManyFamilyInputSchema } from './ConceptPlaceCreateManyFamilyInputSchema';

export const ConceptPlaceCreateManyFamilyInputEnvelopeSchema: z.ZodType<Prisma.ConceptPlaceCreateManyFamilyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ConceptPlaceCreateManyFamilyInputSchema),z.lazy(() => ConceptPlaceCreateManyFamilyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ConceptPlaceCreateManyFamilyInputEnvelopeSchema;
