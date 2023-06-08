/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateWithoutEditionsInputObjectSchema } from "./UserCreateWithoutEditionsInput.schema"
import { UserUncheckedCreateWithoutEditionsInputObjectSchema } from "./UserUncheckedCreateWithoutEditionsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateOrConnectWithoutEditionsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutEditionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEditionsInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutEditionsInputObjectSchema = Schema
