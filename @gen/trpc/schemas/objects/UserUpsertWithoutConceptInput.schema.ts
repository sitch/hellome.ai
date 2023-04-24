import { z } from 'zod'
import { UserUpdateWithoutConceptInputObjectSchema } from './UserUpdateWithoutConceptInput.schema'
import { UserUncheckedUpdateWithoutConceptInputObjectSchema } from './UserUncheckedUpdateWithoutConceptInput.schema'
import { UserCreateWithoutConceptInputObjectSchema } from './UserCreateWithoutConceptInput.schema'
import { UserUncheckedCreateWithoutConceptInputObjectSchema } from './UserUncheckedCreateWithoutConceptInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUpsertWithoutConceptInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutConceptInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutConceptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutConceptInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutConceptInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutConceptInputObjectSchema = Schema
