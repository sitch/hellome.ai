import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserStoryUncheckedCreateInputSchema: z.ZodType<Prisma.UserStoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  storyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserStoryUncheckedCreateInputSchema;
