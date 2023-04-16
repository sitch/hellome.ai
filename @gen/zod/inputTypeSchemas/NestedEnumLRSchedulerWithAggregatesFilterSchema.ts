import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LRSchedulerSchema } from './LRSchedulerSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLRSchedulerFilterSchema } from './NestedEnumLRSchedulerFilterSchema';

export const NestedEnumLRSchedulerWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLRSchedulerWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LRSchedulerSchema).optional(),
  in: z.lazy(() => LRSchedulerSchema).array().optional(),
  notIn: z.lazy(() => LRSchedulerSchema).array().optional(),
  not: z.union([ z.lazy(() => LRSchedulerSchema),z.lazy(() => NestedEnumLRSchedulerWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLRSchedulerFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLRSchedulerFilterSchema).optional()
}).strict();

export default NestedEnumLRSchedulerWithAggregatesFilterSchema;
