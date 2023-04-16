import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingCreateManyFamilyInputSchema } from './ConceptThingCreateManyFamilyInputSchema';

export const ConceptThingCreateManyFamilyInputEnvelopeSchema: z.ZodType<Prisma.ConceptThingCreateManyFamilyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ConceptThingCreateManyFamilyInputSchema),z.lazy(() => ConceptThingCreateManyFamilyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ConceptThingCreateManyFamilyInputEnvelopeSchema;
