import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const StoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StoryScalarWhereWithAggregatesInputSchema),z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryScalarWhereWithAggregatesInputSchema),z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default StoryScalarWhereWithAggregatesInputSchema;
