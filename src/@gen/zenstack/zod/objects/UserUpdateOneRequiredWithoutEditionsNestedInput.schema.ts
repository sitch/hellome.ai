/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutEditionsInputObjectSchema } from "./UserCreateOrConnectWithoutEditionsInput.schema"
import { UserCreateWithoutEditionsInputObjectSchema } from "./UserCreateWithoutEditionsInput.schema"
import { UserUncheckedCreateWithoutEditionsInputObjectSchema } from "./UserUncheckedCreateWithoutEditionsInput.schema"
import { UserUncheckedUpdateWithoutEditionsInputObjectSchema } from "./UserUncheckedUpdateWithoutEditionsInput.schema"
import { UserUpdateWithoutEditionsInputObjectSchema } from "./UserUpdateWithoutEditionsInput.schema"
import { UserUpsertWithoutEditionsInputObjectSchema } from "./UserUpsertWithoutEditionsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpdateOneRequiredWithoutEditionsNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutEditionsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEditionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutEditionsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutEditionsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutEditionsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutEditionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutEditionsNestedInputObjectSchema =
  Schema
