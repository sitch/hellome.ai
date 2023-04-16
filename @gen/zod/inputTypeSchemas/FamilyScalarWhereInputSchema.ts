import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const FamilyScalarWhereInputSchema: z.ZodType<Prisma.FamilyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FamilyScalarWhereInputSchema),z.lazy(() => FamilyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FamilyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FamilyScalarWhereInputSchema),z.lazy(() => FamilyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FamilyScalarWhereInputSchema;
