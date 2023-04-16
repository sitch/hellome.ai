import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LRSchedulerSchema } from './LRSchedulerSchema';

export const NestedEnumLRSchedulerFilterSchema: z.ZodType<Prisma.NestedEnumLRSchedulerFilter> = z.object({
  equals: z.lazy(() => LRSchedulerSchema).optional(),
  in: z.lazy(() => LRSchedulerSchema).array().optional(),
  notIn: z.lazy(() => LRSchedulerSchema).array().optional(),
  not: z.union([ z.lazy(() => LRSchedulerSchema),z.lazy(() => NestedEnumLRSchedulerFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLRSchedulerFilterSchema;
