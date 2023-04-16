import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LRSchedulerSchema } from './LRSchedulerSchema';
import { NestedEnumLRSchedulerWithAggregatesFilterSchema } from './NestedEnumLRSchedulerWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLRSchedulerFilterSchema } from './NestedEnumLRSchedulerFilterSchema';

export const EnumLRSchedulerWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLRSchedulerWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LRSchedulerSchema).optional(),
  in: z.lazy(() => LRSchedulerSchema).array().optional(),
  notIn: z.lazy(() => LRSchedulerSchema).array().optional(),
  not: z.union([ z.lazy(() => LRSchedulerSchema),z.lazy(() => NestedEnumLRSchedulerWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLRSchedulerFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLRSchedulerFilterSchema).optional()
}).strict();

export default EnumLRSchedulerWithAggregatesFilterSchema;
