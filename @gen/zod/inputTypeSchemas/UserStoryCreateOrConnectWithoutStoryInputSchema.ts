import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryWhereUniqueInputSchema } from './UserStoryWhereUniqueInputSchema';
import { UserStoryCreateWithoutStoryInputSchema } from './UserStoryCreateWithoutStoryInputSchema';
import { UserStoryUncheckedCreateWithoutStoryInputSchema } from './UserStoryUncheckedCreateWithoutStoryInputSchema';

export const UserStoryCreateOrConnectWithoutStoryInputSchema: z.ZodType<Prisma.UserStoryCreateOrConnectWithoutStoryInput> = z.object({
  where: z.lazy(() => UserStoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserStoryCreateWithoutStoryInputSchema),z.lazy(() => UserStoryUncheckedCreateWithoutStoryInputSchema) ]),
}).strict();

export default UserStoryCreateOrConnectWithoutStoryInputSchema;
