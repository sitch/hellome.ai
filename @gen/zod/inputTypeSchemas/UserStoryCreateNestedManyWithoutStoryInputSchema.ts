import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryCreateWithoutStoryInputSchema } from './UserStoryCreateWithoutStoryInputSchema';
import { UserStoryUncheckedCreateWithoutStoryInputSchema } from './UserStoryUncheckedCreateWithoutStoryInputSchema';
import { UserStoryCreateOrConnectWithoutStoryInputSchema } from './UserStoryCreateOrConnectWithoutStoryInputSchema';
import { UserStoryCreateManyStoryInputEnvelopeSchema } from './UserStoryCreateManyStoryInputEnvelopeSchema';
import { UserStoryWhereUniqueInputSchema } from './UserStoryWhereUniqueInputSchema';

export const UserStoryCreateNestedManyWithoutStoryInputSchema: z.ZodType<Prisma.UserStoryCreateNestedManyWithoutStoryInput> = z.object({
  create: z.union([ z.lazy(() => UserStoryCreateWithoutStoryInputSchema),z.lazy(() => UserStoryCreateWithoutStoryInputSchema).array(),z.lazy(() => UserStoryUncheckedCreateWithoutStoryInputSchema),z.lazy(() => UserStoryUncheckedCreateWithoutStoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserStoryCreateOrConnectWithoutStoryInputSchema),z.lazy(() => UserStoryCreateOrConnectWithoutStoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserStoryCreateManyStoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserStoryWhereUniqueInputSchema),z.lazy(() => UserStoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserStoryCreateNestedManyWithoutStoryInputSchema;
