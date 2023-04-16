import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereInputSchema } from './FamilyWhereInputSchema';

export const FamilyRelationFilterSchema: z.ZodType<Prisma.FamilyRelationFilter> = z.object({
  is: z.lazy(() => FamilyWhereInputSchema).optional(),
  isNot: z.lazy(() => FamilyWhereInputSchema).optional()
}).strict();

export default FamilyRelationFilterSchema;
