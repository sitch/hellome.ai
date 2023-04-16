import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereInputSchema } from './FamilyWhereInputSchema';

export const FamilyListRelationFilterSchema: z.ZodType<Prisma.FamilyListRelationFilter> = z.object({
  every: z.lazy(() => FamilyWhereInputSchema).optional(),
  some: z.lazy(() => FamilyWhereInputSchema).optional(),
  none: z.lazy(() => FamilyWhereInputSchema).optional()
}).strict();

export default FamilyListRelationFilterSchema;
