import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceSelectSchema } from '../inputTypeSchemas/ConceptPlaceSelectSchema';
import { ConceptPlaceIncludeSchema } from '../inputTypeSchemas/ConceptPlaceIncludeSchema';

export const ConceptPlaceArgsSchema: z.ZodType<Prisma.ConceptPlaceArgs> = z.object({
  select: z.lazy(() => ConceptPlaceSelectSchema).optional(),
  include: z.lazy(() => ConceptPlaceIncludeSchema).optional(),
}).strict();

export default ConceptPlaceArgsSchema;
