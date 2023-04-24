import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutEditionInputObjectSchema } from './UserCreateWithoutEditionInput.schema'
import { UserUncheckedCreateWithoutEditionInputObjectSchema } from './UserUncheckedCreateWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEditionInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutEditionInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEditionInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutEditionInputObjectSchema = Schema
