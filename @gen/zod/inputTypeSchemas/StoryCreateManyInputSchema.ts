import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StoryCreateManyInputSchema: z.ZodType<Prisma.StoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default StoryCreateManyInputSchema;
