import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutFaceInputSchema } from './UserCreateWithoutFaceInputSchema';
import { UserUncheckedCreateWithoutFaceInputSchema } from './UserUncheckedCreateWithoutFaceInputSchema';
import { UserCreateOrConnectWithoutFaceInputSchema } from './UserCreateOrConnectWithoutFaceInputSchema';
import { UserCreateManyFaceInputEnvelopeSchema } from './UserCreateManyFaceInputEnvelopeSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedManyWithoutFaceInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutFaceInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFaceInputSchema),z.lazy(() => UserCreateWithoutFaceInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutFaceInputSchema),z.lazy(() => UserUncheckedCreateWithoutFaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutFaceInputSchema),z.lazy(() => UserCreateOrConnectWithoutFaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyFaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserCreateNestedManyWithoutFaceInputSchema;
