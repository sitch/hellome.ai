import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPlaceWhereInputSchema } from './ConceptPlaceWhereInputSchema';

export const ConceptPlaceListRelationFilterSchema: z.ZodType<Prisma.ConceptPlaceListRelationFilter> = z.object({
  every: z.lazy(() => ConceptPlaceWhereInputSchema).optional(),
  some: z.lazy(() => ConceptPlaceWhereInputSchema).optional(),
  none: z.lazy(() => ConceptPlaceWhereInputSchema).optional()
}).strict();

export default ConceptPlaceListRelationFilterSchema;
