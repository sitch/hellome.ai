import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StoryWhereInputSchema } from './StoryWhereInputSchema';

export const StoryRelationFilterSchema: z.ZodType<Prisma.StoryRelationFilter> = z.object({
  is: z.lazy(() => StoryWhereInputSchema).optional(),
  isNot: z.lazy(() => StoryWhereInputSchema).optional()
}).strict();

export default StoryRelationFilterSchema;
