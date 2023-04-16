import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonSelectSchema } from '../inputTypeSchemas/ConceptPersonSelectSchema';
import { ConceptPersonIncludeSchema } from '../inputTypeSchemas/ConceptPersonIncludeSchema';

export const ConceptPersonArgsSchema: z.ZodType<Prisma.ConceptPersonArgs> = z.object({
  select: z.lazy(() => ConceptPersonSelectSchema).optional(),
  include: z.lazy(() => ConceptPersonIncludeSchema).optional(),
}).strict();

export default ConceptPersonArgsSchema;
