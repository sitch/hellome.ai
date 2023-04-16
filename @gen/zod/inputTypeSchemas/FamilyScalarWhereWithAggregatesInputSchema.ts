import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const FamilyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FamilyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FamilyScalarWhereWithAggregatesInputSchema),z.lazy(() => FamilyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FamilyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FamilyScalarWhereWithAggregatesInputSchema),z.lazy(() => FamilyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FamilyScalarWhereWithAggregatesInputSchema;
