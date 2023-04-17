import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const StoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StoryScalarWhereWithAggregatesInputSchema),z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryScalarWhereWithAggregatesInputSchema),z.lazy(() => StoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default StoryScalarWhereWithAggregatesInputSchema;
