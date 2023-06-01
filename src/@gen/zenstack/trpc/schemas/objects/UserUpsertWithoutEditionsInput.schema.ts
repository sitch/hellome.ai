/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateWithoutEditionsInputObjectSchema } from "./UserCreateWithoutEditionsInput.schema"
import { UserUncheckedCreateWithoutEditionsInputObjectSchema } from "./UserUncheckedCreateWithoutEditionsInput.schema"
import { UserUncheckedUpdateWithoutEditionsInputObjectSchema } from "./UserUncheckedUpdateWithoutEditionsInput.schema"
import { UserUpdateWithoutEditionsInputObjectSchema } from "./UserUpdateWithoutEditionsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpsertWithoutEditionsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEditionsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEditionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEditionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEditionsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutEditionsInputObjectSchema = Schema
