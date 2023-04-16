import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutThingsInputSchema } from './UserCreateWithoutThingsInputSchema';
import { UserUncheckedCreateWithoutThingsInputSchema } from './UserUncheckedCreateWithoutThingsInputSchema';
import { UserCreateOrConnectWithoutThingsInputSchema } from './UserCreateOrConnectWithoutThingsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutThingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutThingsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutThingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutThingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutThingsInputSchema;
