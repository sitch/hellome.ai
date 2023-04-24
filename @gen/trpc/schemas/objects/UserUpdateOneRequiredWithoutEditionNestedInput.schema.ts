import { z } from 'zod'
import { UserCreateWithoutEditionInputObjectSchema } from './UserCreateWithoutEditionInput.schema'
import { UserUncheckedCreateWithoutEditionInputObjectSchema } from './UserUncheckedCreateWithoutEditionInput.schema'
import { UserCreateOrConnectWithoutEditionInputObjectSchema } from './UserCreateOrConnectWithoutEditionInput.schema'
import { UserUpsertWithoutEditionInputObjectSchema } from './UserUpsertWithoutEditionInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutEditionInputObjectSchema } from './UserUpdateWithoutEditionInput.schema'
import { UserUncheckedUpdateWithoutEditionInputObjectSchema } from './UserUncheckedUpdateWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEditionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEditionInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutEditionInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutEditionInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutEditionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutEditionInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutEditionInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneRequiredWithoutEditionNestedInputObjectSchema = Schema
