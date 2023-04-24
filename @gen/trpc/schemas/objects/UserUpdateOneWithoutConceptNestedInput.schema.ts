import { z } from 'zod'
import { UserCreateWithoutConceptInputObjectSchema } from './UserCreateWithoutConceptInput.schema'
import { UserUncheckedCreateWithoutConceptInputObjectSchema } from './UserUncheckedCreateWithoutConceptInput.schema'
import { UserCreateOrConnectWithoutConceptInputObjectSchema } from './UserCreateOrConnectWithoutConceptInput.schema'
import { UserUpsertWithoutConceptInputObjectSchema } from './UserUpsertWithoutConceptInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserUpdateWithoutConceptInputObjectSchema } from './UserUpdateWithoutConceptInput.schema'
import { UserUncheckedUpdateWithoutConceptInputObjectSchema } from './UserUncheckedUpdateWithoutConceptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutConceptNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutConceptInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutConceptInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutConceptInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutConceptInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutConceptInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutConceptInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutConceptNestedInputObjectSchema = Schema
