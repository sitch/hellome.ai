import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingWhereInputSchema } from './ConceptThingWhereInputSchema';

export const ConceptThingListRelationFilterSchema: z.ZodType<Prisma.ConceptThingListRelationFilter> = z.object({
  every: z.lazy(() => ConceptThingWhereInputSchema).optional(),
  some: z.lazy(() => ConceptThingWhereInputSchema).optional(),
  none: z.lazy(() => ConceptThingWhereInputSchema).optional()
}).strict();

export default ConceptThingListRelationFilterSchema;
