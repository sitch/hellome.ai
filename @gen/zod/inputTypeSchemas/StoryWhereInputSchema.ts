import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const StoryWhereInputSchema: z.ZodType<Prisma.StoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StoryWhereInputSchema),z.lazy(() => StoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoryWhereInputSchema),z.lazy(() => StoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default StoryWhereInputSchema;
