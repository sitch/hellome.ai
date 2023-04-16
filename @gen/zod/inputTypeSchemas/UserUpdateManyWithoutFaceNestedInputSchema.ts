import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutFaceInputSchema } from './UserCreateWithoutFaceInputSchema';
import { UserUncheckedCreateWithoutFaceInputSchema } from './UserUncheckedCreateWithoutFaceInputSchema';
import { UserCreateOrConnectWithoutFaceInputSchema } from './UserCreateOrConnectWithoutFaceInputSchema';
import { UserUpsertWithWhereUniqueWithoutFaceInputSchema } from './UserUpsertWithWhereUniqueWithoutFaceInputSchema';
import { UserCreateManyFaceInputEnvelopeSchema } from './UserCreateManyFaceInputEnvelopeSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithWhereUniqueWithoutFaceInputSchema } from './UserUpdateWithWhereUniqueWithoutFaceInputSchema';
import { UserUpdateManyWithWhereWithoutFaceInputSchema } from './UserUpdateManyWithWhereWithoutFaceInputSchema';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';

export const UserUpdateManyWithoutFaceNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutFaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFaceInputSchema),z.lazy(() => UserCreateWithoutFaceInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutFaceInputSchema),z.lazy(() => UserUncheckedCreateWithoutFaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutFaceInputSchema),z.lazy(() => UserCreateOrConnectWithoutFaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutFaceInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutFaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyFaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutFaceInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutFaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutFaceInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutFaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserUpdateManyWithoutFaceNestedInputSchema;
