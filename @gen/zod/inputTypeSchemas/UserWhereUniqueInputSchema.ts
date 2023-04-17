import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().optional()
}).strict();

export default UserWhereUniqueInputSchema;
