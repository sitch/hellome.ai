import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const FaceMeshScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FaceMeshScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FaceMeshScalarWhereWithAggregatesInputSchema),z.lazy(() => FaceMeshScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaceMeshScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaceMeshScalarWhereWithAggregatesInputSchema),z.lazy(() => FaceMeshScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  data: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default FaceMeshScalarWhereWithAggregatesInputSchema;
