import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StoryCreateInputSchema: z.ZodType<Prisma.StoryCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default StoryCreateInputSchema;
