import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const PredictionCreateManyInputSchema: z.ZodType<Prisma.PredictionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  input: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  output: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  version: z.string().optional().nullable(),
  metrics: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValue ]).optional(),
  error: z.string().optional().nullable(),
  logs: z.string().optional().nullable()
}).strict();

export default PredictionCreateManyInputSchema;
