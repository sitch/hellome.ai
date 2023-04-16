import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPlacesInputSchema } from './UserCreateWithoutPlacesInputSchema';
import { UserUncheckedCreateWithoutPlacesInputSchema } from './UserUncheckedCreateWithoutPlacesInputSchema';
import { UserCreateOrConnectWithoutPlacesInputSchema } from './UserCreateOrConnectWithoutPlacesInputSchema';
import { UserUpsertWithoutPlacesInputSchema } from './UserUpsertWithoutPlacesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutPlacesInputSchema } from './UserUpdateWithoutPlacesInputSchema';
import { UserUncheckedUpdateWithoutPlacesInputSchema } from './UserUncheckedUpdateWithoutPlacesInputSchema';

export const UserUpdateOneRequiredWithoutPlacesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPlacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPlacesInputSchema),z.lazy(() => UserUncheckedCreateWithoutPlacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPlacesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPlacesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutPlacesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPlacesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutPlacesNestedInputSchema;
