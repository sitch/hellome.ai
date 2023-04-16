import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  families: z.boolean().optional(),
  places: z.boolean().optional(),
  things: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
