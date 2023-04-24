import { z } from 'zod'
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'
import { UserCreateWithoutConceptInputObjectSchema } from './UserCreateWithoutConceptInput.schema'
import { UserUncheckedCreateWithoutConceptInputObjectSchema } from './UserUncheckedCreateWithoutConceptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutConceptInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutConceptInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutConceptInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutConceptInputObjectSchema = Schema
