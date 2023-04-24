import { z } from 'zod'
import { UserUpdateWithoutEditionInputObjectSchema } from './UserUpdateWithoutEditionInput.schema'
import { UserUncheckedUpdateWithoutEditionInputObjectSchema } from './UserUncheckedUpdateWithoutEditionInput.schema'
import { UserCreateWithoutEditionInputObjectSchema } from './UserCreateWithoutEditionInput.schema'
import { UserUncheckedCreateWithoutEditionInputObjectSchema } from './UserUncheckedCreateWithoutEditionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutEditionInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEditionInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEditionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEditionInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEditionInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutEditionInputObjectSchema = Schema
