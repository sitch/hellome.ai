/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutEditionsInputObjectSchema } from "./UserCreateOrConnectWithoutEditionsInput.schema"
import { UserCreateWithoutEditionsInputObjectSchema } from "./UserCreateWithoutEditionsInput.schema"
import { UserUncheckedCreateWithoutEditionsInputObjectSchema } from "./UserUncheckedCreateWithoutEditionsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateNestedOneWithoutEditionsInput,
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutEditionsInputObjectSchema = Schema
