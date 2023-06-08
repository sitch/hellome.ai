/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateWithoutAuthorInputObjectSchema } from "./UserCreateWithoutAuthorInput.schema"
import { UserUncheckedCreateWithoutAuthorInputObjectSchema } from "./UserUncheckedCreateWithoutAuthorInput.schema"
import { UserUncheckedUpdateWithoutAuthorInputObjectSchema } from "./UserUncheckedUpdateWithoutAuthorInput.schema"
import { UserUpdateWithoutAuthorInputObjectSchema } from "./UserUpdateWithoutAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpsertWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutAuthorInputObjectSchema = Schema
