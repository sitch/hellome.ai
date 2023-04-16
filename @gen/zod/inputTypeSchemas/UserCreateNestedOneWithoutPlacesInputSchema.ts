import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPlacesInputSchema } from './UserCreateWithoutPlacesInputSchema';
import { UserUncheckedCreateWithoutPlacesInputSchema } from './UserUncheckedCreateWithoutPlacesInputSchema';
import { UserCreateOrConnectWithoutPlacesInputSchema } from './UserCreateOrConnectWithoutPlacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutPlacesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPlacesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPlacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPlacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlacesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutPlacesInputSchema;
