import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StoryUncheckedCreateInputSchema: z.ZodType<Prisma.StoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default StoryUncheckedCreateInputSchema;
