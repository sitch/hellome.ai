import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const StoryWhereUniqueInputSchema: z.ZodType<Prisma.StoryWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default StoryWhereUniqueInputSchema;
