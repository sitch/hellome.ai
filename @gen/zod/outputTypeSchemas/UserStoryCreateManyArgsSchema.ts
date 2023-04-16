import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryCreateManyInputSchema } from '../inputTypeSchemas/UserStoryCreateManyInputSchema'

export const UserStoryCreateManyArgsSchema: z.ZodType<Prisma.UserStoryCreateManyArgs> = z.object({
  data: z.union([ UserStoryCreateManyInputSchema,UserStoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default UserStoryCreateManyArgsSchema;
