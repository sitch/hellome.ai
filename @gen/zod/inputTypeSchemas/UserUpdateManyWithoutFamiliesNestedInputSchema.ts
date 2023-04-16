import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutFamiliesInputSchema } from './UserCreateWithoutFamiliesInputSchema';
import { UserUncheckedCreateWithoutFamiliesInputSchema } from './UserUncheckedCreateWithoutFamiliesInputSchema';
import { UserCreateOrConnectWithoutFamiliesInputSchema } from './UserCreateOrConnectWithoutFamiliesInputSchema';
import { UserUpsertWithWhereUniqueWithoutFamiliesInputSchema } from './UserUpsertWithWhereUniqueWithoutFamiliesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithWhereUniqueWithoutFamiliesInputSchema } from './UserUpdateWithWhereUniqueWithoutFamiliesInputSchema';
import { UserUpdateManyWithWhereWithoutFamiliesInputSchema } from './UserUpdateManyWithWhereWithoutFamiliesInputSchema';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';

export const UserUpdateManyWithoutFamiliesNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutFamiliesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFamiliesInputSchema),z.lazy(() => UserCreateWithoutFamiliesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutFamiliesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFamiliesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutFamiliesInputSchema),z.lazy(() => UserCreateOrConnectWithoutFamiliesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutFamiliesInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutFamiliesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutFamiliesInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutFamiliesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutFamiliesInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutFamiliesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserUpdateManyWithoutFamiliesNestedInputSchema;
