import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryScalarWhereInputSchema } from './UserStoryScalarWhereInputSchema';
import { UserStoryUpdateManyMutationInputSchema } from './UserStoryUpdateManyMutationInputSchema';
import { UserStoryUncheckedUpdateManyWithoutUserStoryInputSchema } from './UserStoryUncheckedUpdateManyWithoutUserStoryInputSchema';

export const UserStoryUpdateManyWithWhereWithoutStoryInputSchema: z.ZodType<Prisma.UserStoryUpdateManyWithWhereWithoutStoryInput> = z.object({
  where: z.lazy(() => UserStoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserStoryUpdateManyMutationInputSchema),z.lazy(() => UserStoryUncheckedUpdateManyWithoutUserStoryInputSchema) ]),
}).strict();

export default UserStoryUpdateManyWithWhereWithoutStoryInputSchema;
