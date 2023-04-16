import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutFamiliesInputSchema } from './UserCreateWithoutFamiliesInputSchema';
import { UserUncheckedCreateWithoutFamiliesInputSchema } from './UserUncheckedCreateWithoutFamiliesInputSchema';
import { UserCreateOrConnectWithoutFamiliesInputSchema } from './UserCreateOrConnectWithoutFamiliesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedManyWithoutFamiliesInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutFamiliesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFamiliesInputSchema),z.lazy(() => UserCreateWithoutFamiliesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutFamiliesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFamiliesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutFamiliesInputSchema),z.lazy(() => UserCreateOrConnectWithoutFamiliesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserCreateNestedManyWithoutFamiliesInputSchema;
