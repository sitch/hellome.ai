import { z } from 'zod'
import { UserCreateWithoutConceptInputObjectSchema } from './UserCreateWithoutConceptInput.schema'
import { UserUncheckedCreateWithoutConceptInputObjectSchema } from './UserUncheckedCreateWithoutConceptInput.schema'
import { UserCreateOrConnectWithoutConceptInputObjectSchema } from './UserCreateOrConnectWithoutConceptInput.schema'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutConceptInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutConceptInputObjectSchema = Schema
