import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserStoryUncheckedCreateWithoutStoryInputSchema: z.ZodType<Prisma.UserStoryUncheckedCreateWithoutStoryInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserStoryUncheckedCreateWithoutStoryInputSchema;
