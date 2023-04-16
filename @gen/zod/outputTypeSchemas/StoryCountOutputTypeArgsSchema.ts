import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StoryCountOutputTypeSelectSchema } from './StoryCountOutputTypeSelectSchema';

export const StoryCountOutputTypeArgsSchema: z.ZodType<Prisma.StoryCountOutputTypeArgs> = z.object({
  select: z.lazy(() => StoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default StoryCountOutputTypeSelectSchema;
