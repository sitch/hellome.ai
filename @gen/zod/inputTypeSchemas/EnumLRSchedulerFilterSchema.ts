import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LRSchedulerSchema } from './LRSchedulerSchema';
import { NestedEnumLRSchedulerFilterSchema } from './NestedEnumLRSchedulerFilterSchema';

export const EnumLRSchedulerFilterSchema: z.ZodType<Prisma.EnumLRSchedulerFilter> = z.object({
  equals: z.lazy(() => LRSchedulerSchema).optional(),
  in: z.lazy(() => LRSchedulerSchema).array().optional(),
  notIn: z.lazy(() => LRSchedulerSchema).array().optional(),
  not: z.union([ z.lazy(() => LRSchedulerSchema),z.lazy(() => NestedEnumLRSchedulerFilterSchema) ]).optional(),
}).strict();

export default EnumLRSchedulerFilterSchema;
