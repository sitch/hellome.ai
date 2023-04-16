import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutFamiliesInputSchema } from './UserCreateWithoutFamiliesInputSchema';
import { UserUncheckedCreateWithoutFamiliesInputSchema } from './UserUncheckedCreateWithoutFamiliesInputSchema';

export const UserCreateOrConnectWithoutFamiliesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFamiliesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutFamiliesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFamiliesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutFamiliesInputSchema;
