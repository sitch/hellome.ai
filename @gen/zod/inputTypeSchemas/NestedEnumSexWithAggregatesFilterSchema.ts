import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SexSchema } from './SexSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSexFilterSchema } from './NestedEnumSexFilterSchema';

export const NestedEnumSexWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSexWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SexSchema).optional(),
  in: z.lazy(() => SexSchema).array().optional(),
  notIn: z.lazy(() => SexSchema).array().optional(),
  not: z.union([ z.lazy(() => SexSchema),z.lazy(() => NestedEnumSexWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSexFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSexFilterSchema).optional()
}).strict();

export default NestedEnumSexWithAggregatesFilterSchema;
