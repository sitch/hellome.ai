import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutPlacesInputSchema } from './UserCreateWithoutPlacesInputSchema';
import { UserUncheckedCreateWithoutPlacesInputSchema } from './UserUncheckedCreateWithoutPlacesInputSchema';

export const UserCreateOrConnectWithoutPlacesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPlacesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPlacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPlacesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutPlacesInputSchema;
