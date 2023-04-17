import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const PredictionWhereInputSchema: z.ZodType<Prisma.PredictionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PredictionWhereInputSchema),z.lazy(() => PredictionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PredictionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PredictionWhereInputSchema),z.lazy(() => PredictionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  uuid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  input: z.lazy(() => JsonNullableFilterSchema).optional(),
  output: z.lazy(() => JsonNullableFilterSchema).optional(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  started_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  completed_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  version: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metrics: z.lazy(() => JsonNullableFilterSchema).optional(),
  error: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logs: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PredictionWhereInputSchema;
