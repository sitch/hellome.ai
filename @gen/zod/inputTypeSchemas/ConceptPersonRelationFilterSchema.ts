import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPersonWhereInputSchema } from './ConceptPersonWhereInputSchema';

export const ConceptPersonRelationFilterSchema: z.ZodType<Prisma.ConceptPersonRelationFilter> = z.object({
  is: z.lazy(() => ConceptPersonWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ConceptPersonWhereInputSchema).optional().nullable()
}).strict();

export default ConceptPersonRelationFilterSchema;
