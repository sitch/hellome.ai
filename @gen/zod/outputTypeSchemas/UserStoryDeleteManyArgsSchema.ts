import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryWhereInputSchema } from '../inputTypeSchemas/UserStoryWhereInputSchema'

export const UserStoryDeleteManyArgsSchema: z.ZodType<Prisma.UserStoryDeleteManyArgs> = z.object({
  where: UserStoryWhereInputSchema.optional(),
}).strict()

export default UserStoryDeleteManyArgsSchema;
