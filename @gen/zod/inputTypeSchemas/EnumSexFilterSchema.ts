import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SexSchema } from './SexSchema';
import { NestedEnumSexFilterSchema } from './NestedEnumSexFilterSchema';

export const EnumSexFilterSchema: z.ZodType<Prisma.EnumSexFilter> = z.object({
  equals: z.lazy(() => SexSchema).optional(),
  in: z.lazy(() => SexSchema).array().optional(),
  notIn: z.lazy(() => SexSchema).array().optional(),
  not: z.union([ z.lazy(() => SexSchema),z.lazy(() => NestedEnumSexFilterSchema) ]).optional(),
}).strict();

export default EnumSexFilterSchema;
