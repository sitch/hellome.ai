import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserStoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserStoryUpdateManyMutationInputSchema'
import { UserStoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserStoryUncheckedUpdateManyInputSchema'
import { UserStoryWhereInputSchema } from '../inputTypeSchemas/UserStoryWhereInputSchema'

export const UserStoryUpdateManyArgsSchema: z.ZodType<Prisma.UserStoryUpdateManyArgs> = z.object({
  data: z.union([ UserStoryUpdateManyMutationInputSchema,UserStoryUncheckedUpdateManyInputSchema ]),
  where: UserStoryWhereInputSchema.optional(),
}).strict()

export default UserStoryUpdateManyArgsSchema;
