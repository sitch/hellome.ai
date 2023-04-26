import { UserCreateWithoutEditionInputObjectSchema } from './UserCreateWithoutEditionInput.schema'
import { UserUncheckedCreateWithoutEditionInputObjectSchema } from './UserUncheckedCreateWithoutEditionInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
