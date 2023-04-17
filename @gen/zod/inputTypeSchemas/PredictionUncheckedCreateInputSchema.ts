import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';

export const PredictionUncheckedCreateInputSchema: z.ZodType<Prisma.PredictionUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  uuid: z.string(),
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

export default PredictionUncheckedCreateInputSchema;
