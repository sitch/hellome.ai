import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ConceptThingScalarWhereInputSchema: z.ZodType<Prisma.ConceptThingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConceptThingScalarWhereInputSchema),z.lazy(() => ConceptThingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConceptThingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConceptThingScalarWhereInputSchema),z.lazy(() => ConceptThingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  familyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ConceptThingScalarWhereInputSchema;
