import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default UserCreateInputSchema;
