import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingSelectSchema } from '../inputTypeSchemas/ConceptThingSelectSchema';
import { ConceptThingIncludeSchema } from '../inputTypeSchemas/ConceptThingIncludeSchema';

export const ConceptThingArgsSchema: z.ZodType<Prisma.ConceptThingArgs> = z.object({
  select: z.lazy(() => ConceptThingSelectSchema).optional(),
  include: z.lazy(() => ConceptThingIncludeSchema).optional(),
}).strict();

export default ConceptThingArgsSchema;
