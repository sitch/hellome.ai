import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserStoryWhereUniqueInputSchema: z.ZodType<Prisma.UserStoryWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default UserStoryWhereUniqueInputSchema;
