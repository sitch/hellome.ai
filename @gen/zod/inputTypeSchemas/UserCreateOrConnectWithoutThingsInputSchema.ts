import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutThingsInputSchema } from './UserCreateWithoutThingsInputSchema';
import { UserUncheckedCreateWithoutThingsInputSchema } from './UserUncheckedCreateWithoutThingsInputSchema';

export const UserCreateOrConnectWithoutThingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutThingsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutThingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThingsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutThingsInputSchema;
