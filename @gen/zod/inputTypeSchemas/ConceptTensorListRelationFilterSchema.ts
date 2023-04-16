import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptTensorWhereInputSchema } from './ConceptTensorWhereInputSchema';

export const ConceptTensorListRelationFilterSchema: z.ZodType<Prisma.ConceptTensorListRelationFilter> = z.object({
  every: z.lazy(() => ConceptTensorWhereInputSchema).optional(),
  some: z.lazy(() => ConceptTensorWhereInputSchema).optional(),
  none: z.lazy(() => ConceptTensorWhereInputSchema).optional()
}).strict();

export default ConceptTensorListRelationFilterSchema;
