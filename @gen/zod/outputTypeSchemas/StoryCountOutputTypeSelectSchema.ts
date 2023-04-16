import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const StoryCountOutputTypeSelectSchema: z.ZodType<Prisma.StoryCountOutputTypeSelect> = z.object({
  UserStory: z.boolean().optional(),
}).strict();

export default StoryCountOutputTypeSelectSchema;
