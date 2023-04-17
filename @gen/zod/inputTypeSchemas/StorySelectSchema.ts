import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const StorySelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export default StorySelectSchema;
