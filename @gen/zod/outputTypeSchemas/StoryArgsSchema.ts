import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StorySelectSchema } from '../inputTypeSchemas/StorySelectSchema';
import { StoryIncludeSchema } from '../inputTypeSchemas/StoryIncludeSchema';

export const StoryArgsSchema: z.ZodType<Prisma.StoryArgs> = z.object({
  select: z.lazy(() => StorySelectSchema).optional(),
  include: z.lazy(() => StoryIncludeSchema).optional(),
}).strict();

export default StoryArgsSchema;
